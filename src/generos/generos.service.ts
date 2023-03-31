import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateGeneroDto } from './dto/create-genero.dto';
import { UpdateGeneroDto } from './dto/update-genero.dto';
import { Genero } from './entities/genero.entity';

@Injectable()
export class GenerosService {
  constructor(
    @InjectRepository(Genero)
    private generoRepository:Repository<Genero>,
  ) {}
  async create(generoDto:CreateGeneroDto) {
    const genero = await this.generoRepository.create(generoDto);
    await this.generoRepository.save(genero);

    return genero;
}

  findAll(): Promise<Genero[]> {
    return this.generoRepository.find();
  }

  findOne(id: string) {
    return this.generoRepository.findOneBy({id});
  }

  async update(id: string, updateGeneroDto: UpdateGeneroDto): Promise<Genero> {
    const updatedGenero= await this.generoRepository.findOneBy({id});
    return updatedGenero;
  }
  
  async remove(id:string){
    const genero = await this.findOne(id);
    await this.generoRepository.remove(genero);
    return 'genero removed successfully'
}
}
