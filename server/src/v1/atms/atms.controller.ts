import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AtmsService } from './atms.service';
import { CreateAtmDto } from './dto/create-atm.dto';
import { UpdateAtmDto } from './dto/update-atm.dto';

@Controller('v1/atms')
export class AtmsController {
  constructor(private readonly atmsService: AtmsService) {}

  @Post()
  create(@Body() createAtmDto: CreateAtmDto) {
    return this.atmsService.create(createAtmDto);
  }

  @Get()
  findAll() {
    return this.atmsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.atmsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAtmDto: UpdateAtmDto) {
    return this.atmsService.update(+id, updateAtmDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.atmsService.remove(+id);
  }
}
