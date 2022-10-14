import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';
import { CreateOwnerDto } from 'src/owners/dto/createOwner.dto';

export class CreateUserDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  @MinLength(8)
  password: string;

  owner: CreateOwnerDto;
}
