import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Pet } from './pet.entity';

@Entity('visits')
export class Visit {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    nullable: false,
    default: '',
  })
  visitdate: string;

  @Column({
    nullable: false,
    default: '',
  })
  description: string;

  @OneToOne(() => Pet)
  @JoinColumn()
  pet: Pet;
}
