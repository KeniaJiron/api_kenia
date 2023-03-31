import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Genero {  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  sexo: string;
}
