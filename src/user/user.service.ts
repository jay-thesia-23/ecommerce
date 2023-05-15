import { PrismaService } from './../prisma.service';

import { User } from './entities/user.entity';
import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import * as bcrypt from 'bcrypt';

export const roundsOfHashing = 10;

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}
  //create new user
  async create(createUserDto: CreateUserDto) {
    console.log(createUserDto.password, 'password in serveice');

    const hashPassword = await bcrypt.hash(
      createUserDto.password,
      roundsOfHashing,
    );

    console.log(hashPassword);

    createUserDto.password = hashPassword;

    return this.prisma.user.create({
      data: {
        name: createUserDto.name,
        password: createUserDto.password,
        email: createUserDto.email,
      },
    });
  }

  async findAll() {
    const getAllUsers = await this.prisma.user.findMany({});

    return getAllUsers;
  }

  async findOne(id: number) {
    const specificUser = await this.prisma.user.findFirst({
      where: {
        id: id,
      },
    });

    return specificUser;
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    return await this.prisma.user.update({
      where: {
        id: id,
      },
      data: {
        ...updateUserDto,
      },
    });
  }

  async remove(id: number) {
    return await this.prisma.user.delete({
      where: {
        id: id,
      },
    });
  }
}
