import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Paices {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;
}
