import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';


@Entity()
export class Marca{
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;
}
