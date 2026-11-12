import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Redirect,
  Render,
} from '@nestjs/common';
import { ValidationView } from 'nest-validation-view';
import { CategoriasService } from './categorias.service';
import { CreateCategoriaDto } from './dto/create-categoria.dto';

@Controller('categorias')
export class CategoriasController {
  constructor(private readonly categoriasService: CategoriasService) {}

  @Get()
  @Render('categoria/index')
  async getAll(): Promise<object> {
    const categorias = await this.categoriasService.findAll();
    return { titulo: 'Categorias', listaCategorias: categorias };
  }

  @Get('novo')
  @Render('categoria/formulario')
  async formularioNovo(): Promise<object> {
    return { titulo: 'Nova categoria' };
  }

  @Post('novo')
  @Redirect('/categorias')
  @ValidationView('categoria/formulario', ({ request, errors }) => {
    return {
      categoria: request.body,
      errors,
    };
  })
  async formularioNovoSalvar(@Body() dados: CreateCategoriaDto): Promise<void> {
    await this.categoriasService.create(dados);
  }

  @Get(':id/atualizacao')
  @Render('categoria/formulario')
  async formularioAtualizacao(@Param('id') id: number): Promise<object> {
    const categoria = await this.categoriasService.findOne(id);

    if (!categoria) {
      throw new Error('Categoria não encontrada');
    }

    return { titulo: 'Editar categoria', categoria };
  }

  @Post(':id/atualizacao')
  @Redirect('/categorias')
  @ValidationView('categoria/formulario', ({ request, errors }) => {
    const { params, body } = request;

    return {
      categoria: { id: params.id, ...body },
      errors,
    };
  })
  async formularioAtualizacaoSalvar(
    @Param('id') id: number,
    @Body() dados: CreateCategoriaDto,
  ): Promise<void> {
    await this.categoriasService.update(id, dados);
  }

  @Get(':id/exclusao')
  @Render('categoria/exclusao')
  async confirmarExclusao(@Param('id') id: number): Promise<object> {
    const categoria = await this.categoriasService.findOne(id);

    if (!categoria) {
      throw new Error('Categoria não encontrada');
    }

    return { titulo: 'Excluir categoria', categoria };
  }

  @Post(':id/exclusao')
  @Redirect('/categorias')
  async excluir(@Param('id') id: number): Promise<void> {
    await this.categoriasService.remove(id);
  }
}
