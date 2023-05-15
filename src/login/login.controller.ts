import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Render,
} from '@nestjs/common';
import { LoginService } from './login.service';
import { CreateLoginDto } from './dto/create-login.dto';
import { UpdateLoginDto } from './dto/update-login.dto';

@Controller('login')
export class LoginController {
  constructor(private readonly loginService: LoginService) {}

  @Post()
  async create(@Body() createLoginDto: CreateLoginDto) {
    console.log(createLoginDto, 'body');

    return await this.loginService.create(createLoginDto);
  }

  @Get()
  @Render('login')
  root() {}
}
