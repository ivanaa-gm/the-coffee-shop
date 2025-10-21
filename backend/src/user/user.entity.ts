import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToMany,
  JoinTable,
  OneToOne,
} from 'typeorm';
import { Order } from '../order/order.entity';
import { Drink } from '../product/entities/drink.entity';
import { Food } from '../product/entities/food.entity';
import { Cart } from '../cart/cart.entity';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
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

  @Column({ default: 0 })
  loyaltyPoints: number;

  @Column({ type: 'date', default: () => 'CURRENT_DATE' })
  registeredOn: Date;

  @OneToOne(() => Cart, (cart) => cart.user, { cascade: true })
  cart: Cart;

  @OneToMany(() => Order, (order) => order.user, { cascade: true, lazy: true })
  orders: Order[];

  @ManyToMany(() => Food, { cascade: true, lazy: true })
  @JoinTable({ name: 'user_favorite_foods' })
  favoriteFoods: Food[];

  @ManyToMany(() => Drink, { cascade: true, lazy: true })
  @JoinTable({ name: 'user_favorite_drinks' })
  favoriteDrinks: Drink[];
}
