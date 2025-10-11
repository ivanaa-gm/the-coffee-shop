import { Entity, PrimaryGeneratedColumn, Column, TableInheritance, ManyToMany } from 'typeorm';
import {User} from "../../user/user.entity"

@Entity()
@TableInheritance({ column: { type: 'varchar', name: 'type' } })
export abstract class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column('decimal', { precision: 10, scale: 2 })
  price: number;

  @Column()
  description: string;

  @Column("simple-array")
  ingredients: string[];

  @Column()
  image: string;

  @ManyToMany(() => User, (user) => user.favorites)
  favoritedBy: User[];
}
