import { IsNotEmpty, IsPhoneNumber } from 'class-validator';

export class CreateOwnerDto {
  @IsNotEmpty()
  firstname: string;

  @IsNotEmpty()
  lastname: string;

  @IsNotEmpty()
  address: string;

  @IsNotEmpty()
  city: string;

  @IsNotEmpty()
  @IsPhoneNumber()
  telephone: string;
}
