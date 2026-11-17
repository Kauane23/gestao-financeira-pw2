import { Body, Controller, Get, Param, Post, Redirect, Render } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { ValidationView } from 'nest-validation-view';

@Controller('usuarios')
export class UsuariosController {
  constructor(private readonly usuariosService: UsuariosService) {}

  @Get()
  @Render('usuarios/index')
  async getAll(): Promise<object> {
    let usuarios = await this.usuariosService.findAll();

    return { listaUsuarios: usuarios };
  }

  @Get('novo')
  @Render('usuarios/formulario')
  async formularioNovo(): Promise<object> {
    return {};
  }

  @Post('novo')
  @Redirect('/usuarios')
  @ValidationView('usuarios/formulario', ({ request, errors }) => {
    return {
      usuario: request.body,
      errors
    };
  })
  async formularioNovoSalvar(@Body() dados: CreateUsuarioDto): Promise<void> {
    await this.usuariosService.create(dados);
  }

  @Get(':id/atualizacao')
  @Render('usuarios/formulario')
  async formularioAtualizacao(@Param('id') id: number): Promise<object> {
    const usuario = await this.usuariosService.findOne(id);

    if (!usuario) {
      throw new Error('Usuário não encontrado');
    }

    return { usuario };
  }

  @Post(':id/atualizacao')
  @Redirect('/usuarios')
  @ValidationView('usuarios/formulario', ({ request, errors }) => {
    const { params, body } = request;

    return {
      usuario: { id: params.id, ...body },
      errors
    };
  })
  async formularioAtualizacaoSalvar(
    @Param('id') id: number,
    @Body() dados: CreateUsuarioDto
  ): Promise<void> {
    await this.usuariosService.update(id, dados);
  }

  @Get(':id/exclusao')
  @Render('usuarios/exclusao')
  async confirmarExclusao(@Param('id') id: number): Promise<object> {
    const usuario = await this.usuariosService.findOne(id);

    if (!usuario) {
      throw new Error('Usuário não encontrado');
    }

    return { usuario };
  }

  @Post(':id/exclusao')
  @Redirect('/usuarios')
  async excluir(@Param('id') id: number): Promise<void> {
    await this.usuariosService.remove(id);
  }
}