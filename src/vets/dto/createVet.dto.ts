import { IsNotEmpty } from 'class-validator';
import { Speciality } from 'src/entities/speciality.entity';

export class CreateVetDto {
  @IsNotEmpty()
  firstname: string;

  @IsNotEmpty()
  lastname: string;

  specialities: Speciality[];
}
