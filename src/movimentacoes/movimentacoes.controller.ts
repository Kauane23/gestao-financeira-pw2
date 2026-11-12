
import { Body, Controller, Get, Param, Post, Redirect, Render } from '@nestjs/common';
import { MovimentacoesService } from './movimentacoes.service';
import { CreateMovimentacoesDto } from './dto/create-movimentacoes.dto';

@Controller('movimentacoes')
export class MovimentacoesController {
  constructor(private readonly movimentacoesService: MovimentacoesService) {}

  @Get()
  @Render('movimentacoes/index')
  async getAll(): Promise<object> {
    let movimentacoes = await this.movimentacoesService.findAll();
    return { listaMovimentacoes: movimentacoes };
  }

  @Get('novo')
  @Render('movimentacoes/formulario')
  async formularioNovo(): Promise<object> {
    return {};
  }

  @Post('novo')
  @Redirect('/movimentacoes')
  async formularioNovoSalvar(@Body() dados: CreateMovimentacoesDto): Promise<void> {
    await this.movimentacoesService.create(dados);
  }

  @Get(':id/atualizacao')
  @Render('movimentacoes/formulario')
  async formularioAtualizacao(@Param('id') id: number): Promise<object> {
    const movimentacao = await this.movimentacoesService.findOne(id);

    if (!movimentacao) {
      throw new Error('Movimentação não encontrada');
    }

    return { movimentacao };
  }

  @Post(':id/atualizacao')
  @Redirect('/movimentacoes')
  async formularioAtualizacaoSalvar(
    @Param('id') id: number,
    @Body() dados: CreateMovimentacoesDto,
  ): Promise<void> {
    await this.movimentacoesService.update(id, dados);
  }

  @Get(':id/exclusao')
  @Render('movimentacoes/exclusao')
  async confirmarExclusao(@Param('id') id: number): Promise<object> {
    const movimentacao = await this.movimentacoesService.findOne(id);

    if (!movimentacao) {
      throw new Error('Movimentação não encontrada');
    }

    return { movimentacao };
  }

  @Post(':id/exclusao')
  @Redirect('/movimentacoes')
  async excluir(@Param('id') id: number): Promise<void> {
    await this.movimentacoesService.remove(id);
  }
}