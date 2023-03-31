import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateMarcaDto } from './dto/create-marca.dto';
import { UpdateMarcaDto } from './dto/update-marca.dto';
import { Marca } from './entities/marca.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MarcasService {
  constructor(
    @InjectRepository(Marca)
    private marcaRepository:Repository<Marca>,
  ) {}

  async create(marcasDto:CreateMarcaDto) {
    const marca = await this.marcaRepository.create(marcasDto);
    await this.marcaRepository.save(marca);

    return marca;
}

  findAll(): Promise<Marca[]> {
    return this.marcaRepository.find();
  }

  findOne(id: string) {
    return this.marcaRepository.findOneBy({id});
  }

  async update(id: string, updateMarcaDto: UpdateMarcaDto): Promise<Marca> {
    const updateMarca = await this.marcaRepository.findOneBy({id});
    return updateMarca;
  }
  
  async remove(id:string){
    const marca = await this.findOne(id);
    await this.marcaRepository.remove(marca);
    return 'marca removed successfully'
}
}
