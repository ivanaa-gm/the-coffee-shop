import { ChildEntity, Column } from 'typeorm';
import { Product } from './product.entity';

export type DrinkType = 'hot' | 'cold';

@ChildEntity()
export class Drink extends Product {
  @Column({ type: 'enum', enum: ['hot', 'cold'] })
  drinkType: DrinkType;

  @Column({ nullable: true })
  flavor?: string;
}
