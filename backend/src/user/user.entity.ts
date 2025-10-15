import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { Order } from '../order/order.entity';
import { Drink } from '../product/entities/drink.entity';
import { Food } from '../product/entities/food.entity';

@Entity("users")
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  addressCity: string;

  @Column()
  address: string;

  @Column()
  loyaltyPoints: number;

  @OneToMany(() => Order, (order) => order.user, { cascade: true })
  orders: Order[];

  @ManyToMany(() => Food, { cascade: true })
  @JoinTable({ name: 'user_favorite_foods' })
  favoriteFoods: Food[];

  @ManyToMany(() => Drink, { cascade: true })
  @JoinTable({ name: 'user_favorite_drinks' })
  favoriteDrinks: Drink[];
}
