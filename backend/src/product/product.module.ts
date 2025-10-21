import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { Food } from './entities/food.entity';
import { Drink } from './entities/drink.entity';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';

@Module({
  imports: [TypeOrmModule.forFeature([Product, Food, Drink])],
  providers: [ProductService],
  controllers: [ProductController],
  exports: [TypeOrmModule],
})
export class ProductModule {}
