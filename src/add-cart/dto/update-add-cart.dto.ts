import { PartialType } from '@nestjs/mapped-types';
import { CreateAddCartDto } from './create-add-cart.dto';

export class UpdateAddCartDto extends PartialType(CreateAddCartDto) {}
