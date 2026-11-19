import { Injectable } from '@nestjs/common';
import { Conta } from './entities/conta.entity';
import { CreateContaDto } from './dto/create-conta.dto';

@Injectable()
export class ContasService {
  async findAll(): Promise<Conta[]> {
    let contas = await Conta.find();
    return contas;
  }

  async findOne(_id: number): Promise<Conta | null> {
    return Conta.findOne({ where: { id: _id } });
  }

  async create(dados: CreateContaDto): Promise<Conta> {
    const conta = Conta.create({ ...dados });
    return conta.save();
  }

  async update(id: number, dados: CreateContaDto): Promise<Conta | null> {
    const conta = await this.findOne(id);

    if (!conta) return null;

    Object.assign(conta, { ...dados });
    return conta.save();
  }

  async remove(id: number): Promise<boolean> {
    const conta = await this.findOne(id);

    if (!conta) return false;

    await conta.remove();
    return true;
  }
}