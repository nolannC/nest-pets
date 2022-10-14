import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('owners')
export class Owner {
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

  @Column({
    nullable: false,
    default: '',
  })
  address: string;

  @Column({
    nullable: false,
    default: '',
  })
  city: string;

  @Column({
    nullable: false,
    default: '',
  })
  telephone: string;
}
