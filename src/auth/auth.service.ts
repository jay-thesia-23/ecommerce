import { log } from 'console';
import { ForbiddenException, Get, Injectable, Redirect } from '@nestjs/common';

import { PrismaService } from 'src/prisma.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import * as dotenv from "dotenv"
import { ConfigService } from '@nestjs/config';

dotenv.config()
const roundsOfHashing = 10;
@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService,private jwtService:JwtService,private configService:ConfigService) {}

  async signup(createAuthDto: CreateAuthDto) {
    console.log(createAuthDto.password, 'password in serveice');

    const hashPassword = await bcrypt.hash(
      createAuthDto.password,
      roundsOfHashing,
    );

    console.log(hashPassword);

    createAuthDto.password = hashPassword;

    return this.prisma.user.create({
      data: {
        name: createAuthDto.name,
        password: createAuthDto.password,
        email: createAuthDto.email,
      },
    });
  }

  async signIn(createLoginDto 
    
    
    
    ) {
    console.log(createLoginDto, 'inside the service');
    console.log()
    try {
      const userDetails = await this.prisma.user.findFirst({
        where: {
          email: createLoginDto.email,
        },
      });

      if (!userDetails) {
        throw new ForbiddenException('Credentials incorrect');
      }

      const passMatch = await bcrypt.compare(
        createLoginDto.password,

        userDetails.password,
      );

      if (!passMatch) {
        throw new ForbiddenException('Credentials incorrect');
      }

      console.log(passMatch);

      const loginToken=this.jwtService.sign({
        email:createLoginDto.email,
        password:createLoginDto.password
      }, {secret: process.env.JWT_SECRET })
      
      console.log(loginToken,"token");
      
      return loginToken;
      
    } catch (error) {
      console.log(error, 'error in conroller');
    }
    //find user
  }

  create(createAuthDto: CreateAuthDto) {
    return 'This action adds a new auth';
  }

  findAll() {
    return `This action returns all auth`;
  }

  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

  update(id: number, updateAuthDto: UpdateAuthDto) {
    return `This action updates a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }
}
