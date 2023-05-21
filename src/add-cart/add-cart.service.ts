import { Injectable } from '@nestjs/common';
import { CreateAddCartDto } from './dto/create-add-cart.dto';
import { UpdateAddCartDto } from './dto/update-add-cart.dto';

@Injectable()
export class AddCartService {
  create(createAddCartDto: CreateAddCartDto) {
    return 'This action adds a new addCart';
  }

  findAll() {
    return `This action returns all addCart`;
  }

  findOne(id: number) {
    return `This action returns a #${id} addCart`;
  }

  update(id: number, updateAddCartDto: UpdateAddCartDto) {
    return `This action updates a #${id} addCart`;
  }

  remove(id: number) {
    return `This action removes a #${id} addCart`;
  }
}
