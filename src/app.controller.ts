import { Controller, Post, Request, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { User } from './users/user.entity';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { AuthService } from './auth/auth.service';

interface AuthRequest extends Request {
  user: User // passport creates object
}

@Controller()
export class AppController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('/auth/login')
  login(@Request() req: AuthRequest) {
    return this.authService.login(req.user)
  }
}
