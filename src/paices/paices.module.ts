import { Module } from '@nestjs/common';
import { PaicesService } from './paices.service';
import { PaicesController } from './paices.controller';
import { TypeOrmModule } from '@nestjs/typeorm/dist';
import { Paices } from './entities/paices.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Paices])],
  controllers: [PaicesController],
  providers: [PaicesService]
})
export class PaicesModule {}
