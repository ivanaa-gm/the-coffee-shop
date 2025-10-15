import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  TableInheritance,
  ManyToMany,
} from 'typeorm';
import { User } from '../../user/user.entity';

export abstract class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column('decimal', { precision: 10, scale: 2 })
  price: number;

  @Column()
  description: string;

  @Column('simple-array')
  ingredients: string[];

  @Column()
  image: string;

  @Column()
  flavor: string;
}
