import { Module } from '@nestjs/common';
import { CategoriasService } from './categorias.service';
import { CategoriasController } from './categorias.controller';
import { TypeOrmModule } from '@nestjs/typeorm/dist';
import { Categoria } from './entities/categoria.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Categoria])],
  controllers: [CategoriasController],
  providers: [CategoriasService]
})
export class CategoriasModule {}
