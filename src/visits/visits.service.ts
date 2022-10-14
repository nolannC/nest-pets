import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Visit } from 'src/entities/visit.entity';
import { Repository } from 'typeorm';
import { CreateVisitDto } from './dto/createVisit.dto';

@Injectable()
export class VisitsService {
  constructor(
    @InjectRepository(Visit) private readonly visits: Repository<Visit>,
  ) {}

  getVisit(id: number) {
    return this.visits.findOne({ relations: { pet: true }, where: { id } });
  }

  async createVisit(createVisitDto: CreateVisitDto) {
    const visit = this.visits.create(createVisitDto);
    return this.visits.save(visit);
  }
}
