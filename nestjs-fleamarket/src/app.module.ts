import { Module } from '@nestjs/common';
import { ItemsModule } from './items/items.module';
import { PrismaModule } from './prisma/prisma.module';



@Module({
  imports: [ItemsModule, PrismaModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
