import { AuthModule } from './../auth/auth.module';
import { Module } from '@nestjs/common';
import { DashboardService } from './dashboard.service';
import { DashboardController } from './dashboard.controller';

@Module({
  controllers: [DashboardController],
  providers: [DashboardService],
  imports: [AuthModule],
})
export class DashboardModule {}
