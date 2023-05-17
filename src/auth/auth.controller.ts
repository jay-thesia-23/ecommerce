import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Render,
  Response,
  Res,
} from '@nestjs/common';
import { response } from 'express';

import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { CreateLoginDto } from './dto/create-login.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

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
  async signin(@Body() createLoginDto: CreateLoginDto) {
    let validateUser = await this.authService.signIn(createLoginDto);

    console.log(validateUser, 'user is true');

    if (validateUser) {
      response.redirect('/dashboard');
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
