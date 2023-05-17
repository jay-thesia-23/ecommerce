import { PrismaService } from 'src/prisma.service';
import { Injectable } from '@nestjs/common';
import { CreateSubcategoryDto } from './dto/create-subcategory.dto';
import { UpdateSubcategoryDto } from './dto/update-subcategory.dto';

@Injectable()
export class SubcategoryService {
  constructor(private prisma: PrismaService) {}
  async createSubcategory(createSubcategoryDto: CreateSubcategoryDto) {


    const addedData = await this.prisma.subCategory.create({
      data: {
        subCategoryName: createSubcategoryDto.subcategory,
        categoryId:Number(createSubcategoryDto.categoryId)
      },
    });

    return addedData;
  }

  async findAll() {
    const getCategory=await this.prisma.category.findMany({

    })
    return getCategory;
  }

  findOne(id: number) {
    return `This action returns a #${id} subcategory`;
  }

  update(id: number, updateSubcategoryDto: UpdateSubcategoryDto) {
    return `This action updates a #${id} subcategory`;
  }

  remove(id: number) {
    return `This action removes a #${id} subcategory`;
  }
}
