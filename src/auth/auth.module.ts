import { SessionSerializer } from './session.serializer';
import { HttpService, HttpModule } from '@nestjs/axios';

import { JwtStrategy } from './jwt.strategy';
import { PrismaService } from './../prisma.service';
import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PassportModule } from '@nestjs/passport';
import { JwtModule, JwtService } from '@nestjs/jwt';
import * as dotenv from "dotenv"
dotenv.config()

@Module({
  imports:[PassportModule.register({
    defaultStrategy: 'jwt',
    session: true,
}),
JwtModule.register({
    secret: process.env.JWT_SECRET, 
    signOptions: {
        expiresIn: process.env.EXPIRESIN,
    },
}),HttpModule],
  controllers: [AuthController],
  providers: [AuthService, PrismaService,JwtService,JwtStrategy,SessionSerializer],

  exports: [
    AuthService,
    PassportModule, 
    JwtModule,
    JwtStrategy
],
})
export class AuthModule {}
