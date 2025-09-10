import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common'
import { Jwt } from "./auth.types";
import { User } from "src/users/user.entity";
import { ConfigService } from "@nestjs/config";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {

    constructor(private configService: ConfigService) {

        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: configService.get<string>('JWT_SECRET')!
        })
    }
    
    async validate(payload: Jwt): Promise<Omit<User, 'password'>> {
        return {
            username: payload.username,
            _id: payload.sub
        }
    }
}