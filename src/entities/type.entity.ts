import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('types')
export class Type {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    nullable: false,
    default: '',
  })
  name: string;
}
