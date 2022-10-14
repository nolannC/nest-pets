import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Vet } from 'src/entities/vet.entity';
import { CreateVetDto } from './dto/createVet.dto';

@Injectable()
export class VetsService {
  constructor(@InjectRepository(Vet) private readonly vets: Repository<Vet>) {}

  getVets() {
    return this.vets.find({ relations: { specialities: true } });
  }

  getVet(id: number) {
    return this.vets.findOne({
      relations: { specialities: true },
      where: { id },
    });
  }

  async createVet(createVetDto: CreateVetDto) {
    return await this.vets
      .createQueryBuilder()
      .insert()
      .into(Vet)
      .values(createVetDto)
      .orIgnore()
      .execute();
  }
}
