import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MongoRepository, ObjectID } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { RegisterDto } from './dto/register.dto';
import { User } from './user.entity';
import { LoginDto } from './dto/login-in.dto';
import { JwtService } from '@nestjs/jwt';
import LoginResponseDto from './dto/login-response.dto';
import { IJwtPayload } from './interfaces/i-jwt.payload';
import { RefreshToken } from './refresh-token.entity';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private repository: MongoRepository<User>,
    @InjectRepository(RefreshToken)
    private refreshTokenRepository: MongoRepository<RefreshToken>,
    private jwtService: JwtService,
  ) {}

  async signUp(dto: RegisterDto): Promise<User> {
    const existingUser = await this.repository.findOne({
      where: { email: dto.email },
    });
    if (existingUser) {
      throw new HttpException('Email already taken', HttpStatus.BAD_REQUEST);
    }

    const password = bcrypt.hashSync(dto.password, 10);
    let user = new User(dto.name, dto.email, password);
    user = await this.repository.save(user);
    delete user.password;
    return user;
  }

  async logIn(dto: LoginDto): Promise<LoginResponseDto> {
    const user = await this.repository.findOne({
      where: { email: dto.email },
    });
    if (!user) {
      throw new HttpException(
        'Invalid log in credentials',
        HttpStatus.UNAUTHORIZED,
      );
    }
    if (!bcrypt.compareSync(dto.password, user.password)) {
      throw new HttpException(
        'Invalid log in credentials',
        HttpStatus.UNAUTHORIZED,
      );
    }

    const payload = <IJwtPayload>{
      id: user.id,
      name: user.name,
      email: user.email,
    };
    await this.refreshTokenRepository.findOneAndDelete({ user });
    return {
      accessToken: this.jwtService.sign(payload, {
        secret: process.env.JWT_SECRET,
      }),
      refreshToken: await this.generateRefreshToken(user),
    };
  }

  async refreshToken(refreshToken: string): Promise<LoginResponseDto> {
    const tk = await this.refreshTokenRepository.findOneBy({
      token: refreshToken,
    });
    if (!tk) {
      throw new HttpException('Invalid refresh token', HttpStatus.UNAUTHORIZED);
    }
    let payloadObj;
    try {
      payloadObj = this.jwtService.verify(refreshToken, {
        secret: process.env.JWT_SECRET,
      });
    } catch (e) {
      throw new HttpException(
        'Refresh token expired. Log in again',
        HttpStatus.UNAUTHORIZED,
      );
    }
    const user = await this.findById(payloadObj.id);
    if (!user) {
      await this.refreshTokenRepository.findOneAndDelete({
        token: refreshToken,
      });
      throw new HttpException('Invalid refresh token', HttpStatus.UNAUTHORIZED);
    }
    const payload = <IJwtPayload>{
      id: user.id,
      name: user.name,
      email: user.email,
    };
    const accessToken = this.jwtService.sign(payload, {
      secret: process.env.JWT_SECRET,
    });
    return {
      accessToken,
      refreshToken,
    };
  }

  async findById(id: ObjectID): Promise<User> {
    return this.repository.findOneBy(id);
  }

  private async generateRefreshToken(user: User): Promise<string> {
    const payload = <IJwtPayload>{
      id: user.id,
      name: user.name,
      email: user.email,
    };
    const tokenString = this.jwtService.sign(payload, {
      secret: process.env.JWT_SECRET,
      expiresIn: '2d',
    });
    const token = new RefreshToken(tokenString, user);
    await this.refreshTokenRepository.save(token);
    return token.token;
  }
}
