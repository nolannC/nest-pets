import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('specialities')
export class Speciality {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    nullable: false,
    default: '',
    unique: true,
  })
  name: string;
}
