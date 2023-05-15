import { Injectable } from '@nestjs/common';
import { CreateLoginDto } from './dto/create-login.dto';
import { UpdateLoginDto } from './dto/update-login.dto';

@Injectable()
export class LoginService {
  create(createLoginDto: CreateLoginDto) {
    console.log(createLoginDto, 'insert data');

    return createLoginDto;
  }
}
