import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Speciality } from './speciality.entity';

@Entity('vets')
export class Vet {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    nullable: false,
    default: '',
  })
  firstname: string;

  @Column({
    nullable: false,
    default: '',
  })
  lastname: string;

  @ManyToMany(() => Speciality, { cascade: ['insert', 'update'] })
  @JoinTable()
  specialities: Speciality[];
}
