
// import { Injectable } from '@nestjs/common';
// import { Movimentacoes } from './movimentacoes.entity';
// import { CreateMovimentacoesDto } from './dto/create-movimentacoes.dto';

// @Injectable()
// export class MovimentacoesService {

//     async findAll(): Promise<Movimentacoes[]> {
//         let movimentacoes = await Movimentacoes.find();

//         return movimentacoes;
//     }

//     async findOne(_id: number): Promise<Movimentacoes | null> {
//         return Movimentacoes.findOne({
//             where: { id: _id }
//         });
//     }

//     async create(dados: CreateMovimentacoesDto): Promise<Movimentacoes> {
//         const movimentacao = Movimentacoes.create({ ...dados });

//         return movimentacao.save();
//     }

//     async update(id: number, dados: CreateMovimentacoesDto): Promise<Movimentacoes | null> {
//         const movimentacao = await this.findOne(id);

//         if (!movimentacao) return null;

//         Object.assign(movimentacao, { ...dados });

//         return movimentacao.save();
//     }

//     async remove(id: number): Promise<boolean> {
//         const movimentacao = await this.findOne(id);

//         if (!movimentacao) return false;

//         await movimentacao.remove();

//         return true;
//     }
// }