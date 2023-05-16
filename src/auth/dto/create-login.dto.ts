import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateLoginDto {
  @IsNotEmpty()
  @IsString()
  password: string;

  @IsEmail()
  @IsNotEmpty()
  @IsString()
  email: string;
}
