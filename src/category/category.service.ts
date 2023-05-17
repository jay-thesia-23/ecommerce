import { PrismaService } from 'src/prisma.service';

import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

@Injectable()
export class CategoryService {
  constructor(private readonly prisma: PrismaService) {}
  addCategory(createCategoryDto: CreateCategoryDto) {
    const dataAdded = this.prisma.category.create({
      data: {
        categoryName: createCategoryDto.category,
      },
    });

    console.log(dataAdded);

    return dataAdded;
  }

  findAll() {
    return `This action returns all category`;
  }

  findOne(id: number) {
    return `This action returns a #${id} category`;
  }

  update(id: number, updateCategoryDto: UpdateCategoryDto) {
    return `This action updates a #${id} category`;
  }

  remove(id: number) {
    return `This action removes a #${id} category`;
  }
}
