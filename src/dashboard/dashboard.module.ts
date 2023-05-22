import { PrismaService } from 'src/prisma.service';
import { AuthModule } from './../auth/auth.module';
import { Module } from '@nestjs/common';
import { DashboardService } from './dashboard.service';
import { DashboardController } from './dashboard.controller';

@Module({
  controllers: [DashboardController],
  providers: [DashboardService,PrismaService],
  imports: [AuthModule],
})
export class DashboardModule {}
