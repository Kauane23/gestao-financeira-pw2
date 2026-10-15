import { Module } from '@nestjs/common';
//import { createObserveModule } from '@nestjs/observe';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuariosModule } from './usuarios/usuarios.module';
import { ContasModule } from './contas/contas.module';
import { CategoriasModule } from './categorias/categorias.module';
import { TransacoesModule } from './transacoes/transacoes.module';
import { ResumoModule } from './resumo/resumo.module';

//export const { ObserveModule, ObserveInstrument } = createObserveModule();

@Module({
  imports: [
    // // Distributed tracing, auto-correlated logs, request/job metrics, error
    // // telemetry, alarms, and more — out of the box. Sign up at https://observe.nestjs.com
    // ObserveModule.forRoot({
    //   appKey: 'YOUR_APP_KEY',
    //   appSecret: 'YOUR_APP_SECRET',
    //   serviceId: 'gestao-financeira-pw2',
    // }),
  UsuariosModule,
    ContasModule,
    CategoriasModule,
    TransacoesModule,
    ResumoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
