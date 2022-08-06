import {
  Body,
  Controller,
  Get,
  Post,
  UseGuards,
  ValidationPipe,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import {
  ApiOkResponse,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { GetUser } from './decorators/get-user.decorator';
import { LoginDto } from './dto/login-in.dto';
import LoginResponseDto from './dto/login-response.dto';
import { RefreshTokenDto } from './dto/refreah-token.dto';
import { RegisterDto } from './dto/register.dto';
import { User } from './user.entity';

@Controller('auth')
@ApiTags('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/register')
  @ApiOkResponse({ type: User })
  @ApiOperation({ summary: 'Role(na): Create a new user' })
  async signIn(@Body(ValidationPipe) body: RegisterDto) {
    return this.authService.signUp(body);
  }

  @Post('/login')
  @ApiOperation({ summary: 'Role(na): Login a user' })
  @ApiResponse({ type: LoginResponseDto })
  async logIn(@Body(ValidationPipe) body: LoginDto) {
    return this.authService.logIn(body);
  }

  @Post('/refresh')
  @ApiResponse({ type: LoginResponseDto })
  @ApiOperation({ summary: 'Role(na): Refresh access token' })
  async refresh(@Body(ValidationPipe) body: RefreshTokenDto) {
    return this.authService.refreshToken(body.refreshToken);
  }

  @Get('/test')
  @UseGuards(AuthGuard())
  test(@GetUser() user: User) {
    console.log(user);
  }
}
