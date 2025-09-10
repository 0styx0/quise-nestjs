import { Controller, Post, Request, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { User } from './users/user.entity';
import { LocalAuthGuard } from './auth/local-auth.guard';

interface AuthRequest extends Request {
  user: User // passport creates object
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @UseGuards(LocalAuthGuard)
  @Post('/auth/login')
  login(@Request() req: AuthRequest) {
    return req.user
  }
}
