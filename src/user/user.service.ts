import { PrismaService } from './../prisma.service';

import { User } from './entities/user.entity';
import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}
  //create new user
  async create(createUserDto: CreateUserDto) {}

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
