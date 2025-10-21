import {
  PrimaryGeneratedColumn,
  Column,
} from 'typeorm';

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
