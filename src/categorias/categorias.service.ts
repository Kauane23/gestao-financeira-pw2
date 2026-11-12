import { Injectable } from '@nestjs/common';
import { Categoria } from './entities/categoria.entity';
import { CreateCategoriaDto } from './dto/create-categoria.dto';
import { UpdateCategoriaDto } from './dto/update-categoria.dto';

@Injectable()
export class CategoriasService {
  create(dados: CreateCategoriaDto): Promise<Categoria> {
    const categoria = Categoria.create({ ...dados });
    return categoria.save();
  }

  findAll(): Promise<Categoria[]> {
    return Categoria.find();
  }

  findOne(id: number): Promise<Categoria | null> {
    return Categoria.findOne({ where: { id } });
  }

  async update(
    id: number,
    dados: UpdateCategoriaDto,
  ): Promise<Categoria | null> {
    const categoria = await this.findOne(id);
    if (!categoria) return null;

    Object.assign(categoria, { ...dados });
    return categoria.save();
  }

  async remove(id: number): Promise<boolean> {
    const categoria = await this.findOne(id);
    if (!categoria) return false;

    await categoria.remove();
    return true;
  }
}
