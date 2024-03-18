import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UnitNote, UnitNoteRepository } from 'src/entities/course-unit-note';
import { SearchNoteDto } from './dto/search-note.dto';

@Injectable()
export class UnitService {
  constructor(
    @InjectRepository(UnitNote)
    private readonly unitNoteRepository: UnitNoteRepository,
  ) {}

  async getNoteByPerson(searchObj: SearchNoteDto) {
    console.log(searchObj);
    return '收到';
  }
}
