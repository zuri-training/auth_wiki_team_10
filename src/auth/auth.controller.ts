import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Req,
  ValidationPipe,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { GetUser } from './decorators/get-user.decorator';
import { ForgotPasswordDto } from './dto/forgot-password.dto';
import { LoginDto } from './dto/login-in.dto';
import { RefreshTokenDto } from './dto/refreah-token.dto';
import { RegisterDto } from './dto/register.dto';
import { User } from './user.entity';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/register')
  async signIn(@Body(ValidationPipe) body: RegisterDto) {
    return this.authService.signUp(body);
  }

  @Post('/login')
  async logIn(@Body(ValidationPipe) body: LoginDto) {
    return this.authService.logIn(body);
  }

  @Post('/refresh')
  async refresh(@Body(ValidationPipe) body: RefreshTokenDto) {
    return this.authService.refreshToken(body.refreshToken);
  }

  @Post('/forgot-password')
  async forgotPassword(
    @Body(ValidationPipe) dto: ForgotPasswordDto,
    @Req() req,
  ) {
    return this.authService.forgotPassword(dto.email, req);
  }

  @Get('/reset-password/:token')
  async resetPassword(@Param('token', ValidationPipe) token: string) {
    return this.authService.resetPassword(token);
  }

  @Get('/test')
  test() {
    // console.log(req.hostname);
    return 'Welcome to Auth Wiki Team 10';
  }
}
