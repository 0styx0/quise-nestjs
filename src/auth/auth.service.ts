import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';

import bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/users/user.entity';
import { Jwt } from './auth.types';

@Injectable()
export class AuthService {

    constructor(private usersService: UsersService, private jwtService: JwtService) {}
    
    async validateUser(username: string, password: string) {
        
        const user = await this.usersService.findByUsername(username)
            console.log('User : ', username, user)
        if (!user) {
            console.info('User not found: ', username)
            return null;
        }

        const isCorrectPassword = await bcrypt.compare(password, user.password);
        
        if (isCorrectPassword) {
            // don't return password
            const { password, ...result} = user
            return result
        }
        
        return null
    }
    

    login(user: User) {
        const payload: Jwt = {
            username: user.username,
            sub: user._id
        }

        return {
            access_token: this.jwtService.sign(payload)
        }
    }
}
