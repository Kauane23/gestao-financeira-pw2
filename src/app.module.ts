import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './config/database/database.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { ContasModule } from './contas/contas.module';
import { CategoriasModule } from './categorias/categorias.module';
import { TransacoesModule } from './transacoes/transacoes.module';
import { ResumoModule } from './resumo/resumo.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    DatabaseModule,
    UsuariosModule,
    ContasModule,
    CategoriasModule,
    TransacoesModule,
    ResumoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
