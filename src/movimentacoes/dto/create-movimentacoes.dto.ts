
import { IsNotEmpty } from 'class-validator';

export class CreateMovimentacoesDto {

    @IsNotEmpty({ message: 'O campo valor é obrigatório' })
    valor!: number;

    @IsNotEmpty({ message: 'O campo data é obrigatório' })
    data_movimentacao!: Date;

    descricao?: string;

    @IsNotEmpty({ message: 'O campo conta é obrigatório' })
    id_conta_fk!: number;

    @IsNotEmpty({ message: 'O campo categoria é obrigatório' })
    id_categoria_fk!: number;
}