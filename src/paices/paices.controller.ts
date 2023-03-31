import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PaicesService } from './paices.service';
import { CreatePaicesDto } from './dto/create-paices.dto';
import { UpdatePaicesDto } from './dto/update-paices.dto';

@Controller('paices')
export class PaicesController {
  constructor(private readonly paicesService: PaicesService) {}

  @Post()
  create(@Body() createPaicesDto: CreatePaicesDto) {
    return this.paicesService.create(createPaicesDto);
  }

  @Get()
  findAll() {
    return this.paicesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.paicesService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePaicesDto: UpdatePaicesDto) {
    return this.paicesService.update(id, updatePaicesDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.paicesService.remove(id);
  }
}