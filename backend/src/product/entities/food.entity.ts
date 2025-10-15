import { Column, Entity } from 'typeorm';
import { Product } from './product.entity';

@Entity("foods")
export class Food extends Product {
  @Column()
  category: string;
}
