import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';
import { CreateUserDto } from './dto/createUser.dto';
import * as bcrypt from 'bcrypt';
import { Pet } from 'src/entities/pet.entity';
import { Owner } from 'src/entities/owner.entity';
import { Type } from 'src/entities/type.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly users: Repository<User>,
    @InjectRepository(Pet) private readonly pets: Repository<Pet>,
  ) {}

  async createUser(userData: CreateUserDto) {
    const user = this.users.create(userData);
    user.password = await bcrypt.hash(user.password, 10);
    return await this.users.save(user);
  }

  async getUser(id: number) {
    const user = await this.users.findOne({
      relations: { owner: true },
      where: { id },
    });

    if (!user) {
      return;
    }

    const result: any = user.owner;

    result.pets = await this.pets
      .createQueryBuilder('pets')
      .select('pets.name, birthdate, types.name as type')
      .innerJoin(Owner, 'owners', 'owners.id=pets.ownerId')
      .innerJoin(Type, 'types', 'types.id=pets.typeId')
      .where({ owner: result.id })
      .execute();
    return result;
  }
}
