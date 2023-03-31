import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm/dist';
import { Repository } from 'typeorm';
import { CreatePaicesDto } from './dto/create-paices.dto';
import { UpdatePaicesDto } from './dto/update-paices.dto';
import { Paices } from './entities/paices.entity';

@Injectable()
export class PaicesService {
  constructor(
    @InjectRepository(Paices)
    private paicesRepository: Repository<Paices>,
  ) {}
  async create(paicesDto:CreatePaicesDto) {
    const paices = await this.paicesRepository.create(paicesDto);
    await this.paicesRepository.save(paices);

    return paices;
}

  findAll(): Promise<Paices[]> {
    return this.paicesRepository.find();
  }

  findOne(id: string) {
    return this.paicesRepository.findOneBy({id});
  }

  async update(id: string, updatePaicesDto: UpdatePaicesDto): Promise<Paices> {
    const updatedPaices = await this.paicesRepository.findOneBy({id});
    return updatedPaices;
  }
  
  async remove(id:string){
    const paices = await this.findOne(id);
    await this.paicesRepository.remove(paices);
    return 'paices removed successfully'
}
}
