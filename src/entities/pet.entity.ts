import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Owner } from './owner.entity';
import { Type } from './type.entity';

@Entity('pets')
export class Pet {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    nullable: false,
    default: '',
  })
  name: string;

  @Column({
    nullable: false,
    default: '',
  })
  birthdate: string;

  @ManyToOne(() => Type, (type) => type.name)
  type: Type;

  @ManyToOne(() => Owner, (owner) => owner.id)
  owner: Owner;
}
