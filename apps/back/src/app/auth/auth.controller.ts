import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Auth } from './decorators/auth.decorator';
import { SignInDto } from './dto/sign-in.dto';
import { SignUpDto } from './dto/sign-up.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/sign-in')
  signIn(@Body() userSignInDto: SignInDto) {
    return this.authService.signIn(userSignInDto);
  }

  @Post('/sign-up')
  signUp(@Body() userSignUpDto: SignUpDto) {
    return this.authService.signUp(userSignUpDto);
  }

  @Post('/delete')
  @Auth('Admin')
  deleteAll() {
    return this.authService.deleteUsers();
  }

  @Get('/session-check-point')
  @Auth()
  session() {
    return 'Session ok';
  }
}
