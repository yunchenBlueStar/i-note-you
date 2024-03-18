import { Controller, Get, Query, Req } from '@nestjs/common';
import { UnitService } from './unit.service';

import { Request } from 'express';
import { SearchNoteDto } from './dto/search-note.dto';

@Controller('course/unit')
export class UnitController {
  constructor(private readonly unitService: UnitService) {}

  @Get('note/person')
  getNoteByPerson(@Req() req: Request, @Query() searchObj: SearchNoteDto) {
    console.log(req);
    return this.unitService.getNoteByPerson(searchObj);
  }
}
