import { Controller, Get, Post, Body, Patch, Param, Delete, Put, Query } from '@nestjs/common';
import { AtmsService } from './atms.service';
import { CreateAtmDto } from './dto/create-atm.dto';
import { UpdateAtmDto } from './dto/update-atm.dto';

@Controller('v1/atms')
export class AtmsController {
  constructor(private readonly atmsService: AtmsService) {}

  @Post('/:env')
  create(@Param('env') env: string, @Body() createAtmDto: CreateAtmDto) {
    return this.atmsService.create(createAtmDto, env);
  }

  @Get('/:env')
  findAll(@Param('env') env: string) {
    return this.atmsService.findAll(env);
  }

  @Get('/:env/:id')
  findOne(@Param('env') env: string, @Param('id') id: string) {
    return this.atmsService.findOne(env, +id);
  }

  @Put('/:env/:id')
  update(@Param('env') env: string, @Param('id') id: string, @Body() updateAtmDto: UpdateAtmDto) {
    return this.atmsService.update(env, +id, updateAtmDto);
  }

  @Delete('/:env/:id')
  remove(@Param('env') env: string, @Param('id') id: string) {
    return this.atmsService.remove(env, +id);
  }
}
