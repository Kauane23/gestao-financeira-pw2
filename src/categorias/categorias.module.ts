import { Module } from '@nestjs/common';
import { DatabaseModule } from '../config/database/database.module';
import { CategoriasService } from './categorias.service';
import { CategoriasController } from './categorias.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [CategoriasController],
  providers: [CategoriasService],
})
export class CategoriasModule {}
