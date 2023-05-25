import { HttpService, HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { UserAddressModule } from './user-address/user-address.module';

import { RolesModule } from './roles/roles.module';

import { DashboardModule } from './dashboard/dashboard.module';
import { AuthModule } from './auth/auth.module';
import { CategoryModule } from './category/category.module';
import { SubcategoryModule } from './subcategory/subcategory.module';
import { ProductsModule } from './products/products.module';
import { AddCartModule } from './add-cart/add-cart.module';
import { MulterModule } from '@nestjs/platform-express';
import { CheckoutModule } from './checkout/checkout.module';
import { ConfigModule } from '@nestjs/config';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { AdminPanelModule } from './admin-panel/admin-panel.module';
import { XModule } from './x/x.module';



@Module({
  imports: [
    MulterModule.register({
      dest:"/assets/uploads"
    }),
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    
    UserModule,
    UserAddressModule,
    AuthModule,
    RolesModule,
    DashboardModule,
    CategoryModule,
    SubcategoryModule,
    ProductsModule,
    AddCartModule,
    CheckoutModule,
    HttpModule,
    AdminPanelModule,
    XModule
  
   
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
