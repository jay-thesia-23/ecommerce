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
    console.log(createAuthDto, 'dtso');

    return this.authService.signup(createAuthDto);
  }

  @Get('login')
  @Render('login')
  loginPage() {}

  @Post('login')
  signin(@Body() createLoginDto: CreateLoginDto) {
    console.log(createLoginDto, 'dto');

    return this.authService.signIn(createLoginDto);
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
