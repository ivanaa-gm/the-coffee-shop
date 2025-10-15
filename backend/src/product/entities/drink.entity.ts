import { Column, Entity } from 'typeorm';
import { Product } from './product.entity';

export type DrinkType = 'hot' | 'cold';

@Entity("drinks")
export class Drink extends Product {
  @Column({ type: 'enum', enum: ['hot', 'cold'] })
  drinkType: DrinkType;
}
