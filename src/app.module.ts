import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoriasModule } from './categorias/categorias.module';
import { Categoria } from './categorias/entities/categoria.entity';
import { Paices } from './paices/entities/paices.entity';
import { PaicesModule } from './paices/paices.module';
import { MarcasModule } from './marcas/marcas.module';
import { GenerosModule } from './generos/generos.module';
import { Genero } from './generos/entities/genero.entity';
import { Marca } from './marcas/entities/marca.entity';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '12345678',
    database: 'test',
    entities: [Categoria, Paices, Genero, Marca],
    synchronize: true,
  }),
  CategoriasModule,
  PaicesModule,
  MarcasModule,
  GenerosModule,
],
  controllers: [AppController], 
  providers: [AppService],
})
export class AppModule {}
