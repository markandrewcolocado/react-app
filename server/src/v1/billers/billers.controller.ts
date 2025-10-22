import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BillersService } from './billers.service';
import { CreateBillerDto } from './dto/create-biller.dto';
import { UpdateBillerDto } from './dto/update-biller.dto';

@Controller('billers')
export class BillersController {
  constructor(private readonly billersService: BillersService) {}

  @Post()
  create(@Body() createBillerDto: CreateBillerDto) {
    return this.billersService.create(createBillerDto);
  }

  @Get()
  findAll() {
    return this.billersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.billersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBillerDto: UpdateBillerDto) {
    return this.billersService.update(+id, updateBillerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.billersService.remove(+id);
  }
}
