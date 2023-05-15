import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { UserAddressModule } from './user-address/user-address.module';
import { AuthModule } from './auth/auth.module';
import { RolesModule } from './roles/roles.module';
import { LoginModule } from './login/login.module';

@Module({
  imports: [UserModule, UserAddressModule, AuthModule, RolesModule, LoginModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
