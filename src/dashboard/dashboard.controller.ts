import { CreateLoginDto } from './../auth/dto/create-login.dto';

import { AuthService } from './../auth/auth.service';
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Render,
  Redirect,
  Req,
} from '@nestjs/common';

import { DashboardService } from './dashboard.service';

import { CreateDashboardDto } from './dto/create-dashboard.dto';
import { UpdateDashboardDto } from './dto/update-dashboard.dto';

@Controller('dashboard')
export class DashboardController {
  constructor(
    private readonly dashboardService: DashboardService,
    private readonly authservice: AuthService,
  ) {}

  @Post()
  create(@Body() createDashboardDto: CreateDashboardDto) {
    return this.dashboardService.create(createDashboardDto);
  }

  @Get()
  @Render('dashboard')
  async root() {
     const allProducts=await this.findAllProducts()


    return {allProducts}
  }

  //get all products
  async findAllProducts(){
    const allProducts =await this.dashboardService.findAllProducts();

    return allProducts
  }

  //add To cart
  @Post("cart")
  async addCart(@Req() req){

    let addCard=await this.dashboardService.addCart(req)

    return {addCard}
    
  }

  @Post('index')
  @Redirect('/dashboard')
  async redirect(@Body() createloigindto: CreateLoginDto) {
    let curr = await this.authservice.signIn(createloigindto);

    console.log(curr, 'current');

    if (curr) {
      return 'user is logged in ';
    } else {
      console.log('incorrect user name');
    }
  }

  findAll() {
    return this.dashboardService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.dashboardService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateDashboardDto: UpdateDashboardDto,
  ) {
    return this.dashboardService.update(+id, updateDashboardDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.dashboardService.remove(+id);
  }
}
