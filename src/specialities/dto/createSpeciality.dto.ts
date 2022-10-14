import { IsNotEmpty } from 'class-validator';

export class CreateSpecialityDto {
  @IsNotEmpty()
  name: string;
}
