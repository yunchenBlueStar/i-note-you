import { Module } from '@nestjs/common';
import { UnitService } from './unit.service';
import { UnitController } from './unit.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UnitNote } from 'src/entities/course-unit-note';

@Module({
  imports: [TypeOrmModule.forFeature([UnitNote])],
  controllers: [UnitController],
  providers: [UnitService],
})
export class UnitModule {}
