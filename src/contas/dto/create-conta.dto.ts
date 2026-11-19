import { IsNotEmpty, IsOptional, MaxLength, IsNumber, IsInt } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateContaDto {
    @IsOptional()
    @MaxLength(100)
    nome?: string;

    @IsOptional()
    @MaxLength(150)
    nome_instituicao?: string;

    @IsNotEmpty({ message: 'O tipo da conta é obrigatório' })
    @MaxLength(100)
    tipo!: string;

    @IsNotEmpty({ message: 'O saldo atual é obrigatório' })
    @Type(() => Number)
    @IsNumber({}, { message: 'Informe um saldo válido' })
    saldo_atual!: number;

    @IsNotEmpty({ message: 'O usuário é obrigatório' })
    @Type(() => Number)
    @IsInt({ message: 'Informe um usuário válido' })
    id_usuario_fk!: number;
}