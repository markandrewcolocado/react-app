import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { MicroservicesService } from './microservices.service';
import { CreateMicroserviceDto } from './dto/create-microservice.dto';
import { UpdateMicroserviceDto } from './dto/update-microservice.dto';

@Controller('v1/microservices')
export class MicroservicesController {
  constructor(private readonly microservicesService: MicroservicesService) {}

  @Post()
  create(@Body() createMicroserviceDto: CreateMicroserviceDto) {
    return this.microservicesService.create(createMicroserviceDto);
  }

  @Get()
  findAll(@Query('env') env: string) {
    return this.microservicesService.findAll(env);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.microservicesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMicroserviceDto: UpdateMicroserviceDto) {
    return this.microservicesService.update(+id, updateMicroserviceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.microservicesService.remove(+id);
  }
}
