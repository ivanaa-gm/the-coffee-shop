import { ChildEntity, Column } from 'typeorm';
import { Product } from './product.entity';

@ChildEntity()
export class Food extends Product {
  @Column()
  category: string;

  @Column({ nullable: true })
  flavor?: string;
}
