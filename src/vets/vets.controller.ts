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
import { CreateVetDto } from './dto/createVet.dto';
import { VetsService } from './vets.service';

@Controller('vets')
export class VetsController {
  constructor(private readonly vetsService: VetsService) {}

  @Get()
  getVets() {
    return this.vetsService.getVets();
  }

  @Get(':id')
  async getVet(@Param('id', ParseIntPipe) id: number) {
    const vet = await this.vetsService.getVet(id);
    if (!vet) {
      throw new HttpException('Vet not found!', HttpStatus.NOT_FOUND);
    }
    return vet;
  }

  @Post()
  @UsePipes(ValidationPipe)
  createVet(@Body() createVetDto: CreateVetDto) {
    this.vetsService.createVet(createVetDto);
  }
}
