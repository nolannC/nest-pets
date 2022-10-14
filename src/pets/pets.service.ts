import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pet } from 'src/entities/pet.entity';
import { Type } from 'src/entities/type.entity';

@Injectable()
export class PetsService {
  constructor(@InjectRepository(Pet) private readonly pets: Repository<Pet>) {}

  getPets() {
    return this.pets
      .createQueryBuilder('pets')
      .select('pets.name, birthdate, types.name as type')
      .innerJoin(Type, 'types', 'types.id=pets.typeId')
      .execute();
  }
}
