import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Speciality } from 'src/entities/speciality.entity';
import { Repository } from 'typeorm';
import { CreateSpecialityDto } from './dto/createSpeciality.dto';

@Injectable()
export class SpecialitiesService {
  constructor(
    @InjectRepository(Speciality)
    private readonly specialities: Repository<Speciality>,
  ) {}

  getSpecialities() {
    return this.specialities.find();
  }

  getSpeciality(id: number) {
    return this.specialities.findOne({ where: { id } });
  }

  async createSpeciality(createSpecialityDto: CreateSpecialityDto) {
    return this.specialities.upsert(createSpecialityDto, {
      conflictPaths: ['name'],
    });
  }
}
