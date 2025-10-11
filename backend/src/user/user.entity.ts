import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToMany, JoinTable } from 'typeorm';
import { Order } from '../order/order.entity';
import { Product } from '../product/entities/product.entity';

@Entity()
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

  @ManyToMany(() => Product, (product) => product.favoritedBy, { cascade: true })
  @JoinTable()
  favorites: Product[];
}
