import { Test, TestingModule } from '@nestjs/testing';
import { ResumoController } from './resumo.controller';
import { ResumoService } from './resumo.service';

describe('ResumoController', () => {
  let controller: ResumoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ResumoController],
      providers: [ResumoService],
    }).compile();

    controller = module.get<ResumoController>(ResumoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
