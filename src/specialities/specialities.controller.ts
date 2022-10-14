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
import { CreateSpecialityDto } from './dto/createSpeciality.dto';
import { SpecialitiesService } from './specialities.service';

@Controller('specialities')
export class SpecialitiesController {
  constructor(private readonly specialitiesService: SpecialitiesService) {}

  @Get()
  getSpecialities() {
    return this.specialitiesService.getSpecialities();
  }

  @Get(':id')
  async getSpeciality(@Param('id', ParseIntPipe) id: number) {
    const specitality = await this.specialitiesService.getSpeciality(id);
    if (!specitality) {
      throw new HttpException('Speciality not found!', HttpStatus.NOT_FOUND);
    }
    return specitality;
  }

  @Post()
  @UsePipes(ValidationPipe)
  async createSpeciality(@Body() createSpecialityDto: CreateSpecialityDto) {
    return this.specialitiesService.createSpeciality(createSpecialityDto);
  }
}
