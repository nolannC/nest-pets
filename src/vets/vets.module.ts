import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Vet } from 'src/entities/vet.entity';
import { VetsController } from './vets.controller';
import { VetsService } from './vets.service';

@Module({
  imports: [TypeOrmModule.forFeature([Vet])],
  controllers: [VetsController],
  providers: [VetsService],
})
export class VetsModule {}
