import { PartialType } from '@nestjs/mapped-types';
import { CreateResumoDto } from './create-resumo.dto';

export class UpdateResumoDto extends PartialType(CreateResumoDto) {}
