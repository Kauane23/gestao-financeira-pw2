import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './config/database/database.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { ContasModule } from './contas/contas.module';
import { CategoriasModule } from './categorias/categorias.module';
import { MovimentacoesModule } from './movimentacoes/movimentacoes.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    DatabaseModule,
    UsuariosModule,
    ContasModule,
    CategoriasModule,
    MovimentacoesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
