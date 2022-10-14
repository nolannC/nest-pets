import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateVisitDto } from './dto/createVisit.dto';
import { VisitsService } from './visits.service';

@Controller('visits')
export class VisitsController {
  constructor(private readonly visitsService: VisitsService) {}

  @Get(':id')
  async getVisit(@Param('id', ParseIntPipe) id: number) {
    const visit = await this.visitsService.getVisit(id);
    if (!visit) {
      throw new HttpException('Visit not found!', HttpStatus.NOT_FOUND);
    }
    return visit;
  }

  @Post()
  @UsePipes(ValidationPipe)
  createVet(@Body() createVisitDto: CreateVisitDto) {
    this.visitsService.createVisit(createVisitDto);
  }
}
