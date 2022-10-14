import { IsNotEmpty } from 'class-validator';
import { Pet } from 'src/entities/pet.entity';

export class CreateVisitDto {
  @IsNotEmpty()
  visitdate: string;

  @IsNotEmpty()
  description: string;

  @IsNotEmpty()
  pet: Pet;
}
