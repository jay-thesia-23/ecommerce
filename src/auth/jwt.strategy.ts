import { AuthService } from './auth.service';
import { PassportStrategy } from "@nestjs/passport";
import {Strategy,ExtractJwt} from "passport-jwt"
import * as dotenv from "dotenv"
import { Injectable, UnauthorizedException } from "@nestjs/common";
import { log } from "console";
import { PrismaService } from 'src/prisma.service';
import { Request } from 'express';

dotenv.config()

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy,"jwt"){

    constructor(private authService:AuthService,private prisma:PrismaService){
        super({
            jwtFromRequest: ExtractJwt.fromExtractors([
                JwtStrategy.extractJWTFromCookie,
              ]),
            ignoreExpiration: false,
            secretOrKey:process.env.JWT_SECRET
           
        })
    }

    private static extractJWTFromCookie(req:Request){

        if(req.cookies && req.cookies.loginToken){
            return req.cookies.loginToken
        }
        return null;
    }

    async validate(payload:any){

        // const user=await this.authService.signIn(payload)

        const user=this.prisma.user.findUnique({
            where:{
                email:payload.email
            }
        })
        
        console.log("user get in sttregy",user);
        
        if(!user){
            return null
        }

        console.log("check every time in stretegy");
        

        
        return user;
    }
}