import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { AuthService } from './auth.service';
import { User } from './user.entity';
import { IJwtPayload } from './interfaces/i-jwt.payload';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: 'my-jwt-super-secret-to-keep-away-from-everyone',
    });
  }

  async validate(payload: IJwtPayload): Promise<User> {
    const user = await this.authService.findById(payload.id);
    if (!user) {
      throw new HttpException('Unauthorized user', HttpStatus.UNAUTHORIZED);
    }
    delete user.password;
    return user;
  }
}
