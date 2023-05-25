export class CreateUserDto {
  name: string;
  password: string;
  email: string;
  deleted?:boolean
}
