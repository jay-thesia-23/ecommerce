import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateSubcategoryDto {
  @IsString()
  categoryId:number


  @IsString()
  @IsNotEmpty()
  subcategory: string;


}
