import { PartialType } from '@nestjs/mapped-types';
import { CreatePaicesDto } from './create-paices.dto';

export class UpdatePaicesDto extends PartialType(CreatePaicesDto) {}
