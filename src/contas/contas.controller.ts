import { Body, Controller, Get, Param, Post, Redirect, Render, Patch } from '@nestjs/common';
import { ContasService } from './contas.service';
import { CreateContaDto } from './dto/create-conta.dto';
import { ValidationView } from 'nest-validation-view';

@Controller('contas')
export class ContasController {
  constructor(private readonly contasService: ContasService) { }

  @Get()
  @Render('contas/index')
  async getAll(): Promise<object> {
    let contas = await this.contasService.findAll();

    return { listaContas: contas };
  }

  @Get('novo')
  @Render('contas/formulario')
  async formularioNovo(): Promise<object> {
    return {};
  }

  @Post('novo')
  @Redirect('/contas')
  @ValidationView('contas/formulario', ({ request, errors }) => {
    return {
      conta: request.body,
      errors
    };
  })
  async formularioNovoSalvar(@Body() dados: CreateContaDto): Promise<void> {
    await this.contasService.create(dados);
  }

  @Get(':id/atualizacao')
  @Render('contas/formulario')
  async formularioAtualizacao(@Param('id') id: number): Promise<object> {
    const conta = await this.contasService.findOne(id);

    if (!conta) {
      throw new Error('Conta não encontrada');
    }

    return { conta };
  }

  @Post(':id/atualizacao')
  @Redirect('/contas')
  @ValidationView('contas/formulario', ({ request, errors }) => {
    const { params, body } = request;

    return {
      conta: { id: params.id, ...body },
      errors
    };
  })

  async formularioAtualizacaoSalvar(
    @Param('id') id: number,
    @Body() dados: CreateContaDto
  ): Promise<void> {
    await this.contasService.update(id, dados);
  }

  @Get(':id/exclusao')
    @Render('contas/exclusao')
    async confirmarExclusao(@Param('id') id: number): Promise<object> {
        const conta = await this.contasService.findOne(id);

        if (!conta) {
            throw new Error('Conta não encontrada');
        }

        return { conta };
    }

    @Post(':id/exclusao')
    @Redirect('/contas')
    async excluir(@Param('id') id: number): Promise<void> {
        await this.contasService.remove(id);
    }
}