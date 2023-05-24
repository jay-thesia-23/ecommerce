import { ConfigService } from '@nestjs/config';
import { AuthService } from './auth.service';
import { PassportStrategy } from "@nestjs/passport";
import {Strategy,ExtractJwt} from "passport-jwt"
import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PrismaService } from 'src/prisma.service';
import { request, Request } from 'express';
import * as dotenv from 'dotenv';

dotenv.config();

// secretOrKey:`${process.env.JWT_SECRET}`,
// jwtFromRequest: ExtractJwt.fromExtractors([
//     JwtStrategy.extractJWTFromCookie,
//   ]),

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy){

    constructor(private authService:AuthService,private prisma:PrismaService,private configService:ConfigService){
        super({
            
            jwtFromRequest:ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: process.env.JWT_SECRET,
        })
    }


      extractJWTFromCookie(req:Request){

        console.log(process.env.JWT_SECRET,"inside the extract jwt");
    
       
        
        if(req.cookies && req.cookies.loginToken){
            return req.cookies.loginToken
        }
        return null;
    }

    async validate(payload:any){

        // const user=await this.authService.signIn(payload)
        this.extractJWTFromCookie(request)
        console.log(payload,"goto the stready");
        
        const user=await this.prisma.user.findUniqueOrThrow({
            where:{
                email:payload.email
            }
        })
        
        console.log("user get in sttregy",user);
        
        if(!user){
            throw new UnauthorizedException();
        }

        console.log("check every time in stretegy");
        

        
        return user;
    }
}