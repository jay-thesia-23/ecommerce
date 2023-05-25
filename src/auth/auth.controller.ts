import { JwtService } from '@nestjs/jwt';
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Render,
  Res,
  Req

} from '@nestjs/common';
import { Request, Response } from 'express';

import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { CreateLoginDto } from './dto/create-login.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { HttpService } from '@nestjs/axios';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService,private jwtService:JwtService,private httpService:HttpService) {}

  @Get('register')
  @Render('register')
  root() {}

  //sign in the user from the register page
  @Post('register')
  signup(@Body() createAuthDto: CreateAuthDto) {
    return this.authService.signup(createAuthDto);
  }

  @Get('login')
  @Render('login')
  loginPage() {}

  @Post('login')
  async signin(@Body() createLoginDto: CreateLoginDto,@Res() res:Response,@Req() req:Request) {

    try {
      
      let token = await this.authService.signIn(createLoginDto);
      console.log(token, 'user is true');

    if (token) {
      console.log("before not go to inside");
      res.json(token)
      console.log("not go to inside");
    }
    } catch (error) {
      console.log(error);
      throw new Error(error)
      
    }
    
  }

  @Post()
  create(@Body() createAuthDto?: CreateAuthDto) {
    return this.authService.create(createAuthDto) || '';
  }

  @Get()
  findAll() {
    return this.authService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.authService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAuthDto: UpdateAuthDto) {
    return this.authService.update(+id, updateAuthDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.authService.remove(+id);
  }
}
