import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm/dist';
import { Repository } from 'typeorm';
import { CreateCategoriaDto } from './dto/create-categoria.dto';
import { UpdateCategoriaDto } from './dto/update-categoria.dto';
import { Categoria } from './entities/categoria.entity';

@Injectable()
export class CategoriasService {
  constructor(
    @InjectRepository(Categoria) 
    private categoriaRepository: Repository<Categoria>,
  ) {}


  async create(categoriaDto:CreateCategoriaDto) {
    const product = await this.categoriaRepository.create(categoriaDto);
    await this.categoriaRepository.save(product);

    return product;
}

  findAll(): Promise<Categoria[]> {
    return this.categoriaRepository.find();
  }

  findOne(id: string) {
    return this.categoriaRepository.findOneBy({id});
  }

  async update(id: string, updateCategoryDto: UpdateCategoriaDto): Promise<Categoria> {
    const updatedCategory = await this.categoriaRepository.findOneBy({id});
    return updatedCategory;
  }
  
  async remove(id:string){
    const categoria = await this.findOne(id);
    await this.categoriaRepository.remove(categoria);
    return 'category removed successfully'
}
}
