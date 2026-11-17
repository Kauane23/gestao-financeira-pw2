import { IsEmail, IsNotEmpty, MaxLength } from 'class-validator';

export class CreateUsuarioDto {

    @IsNotEmpty({ message: 'O nome completo é obrigatório' })
    @MaxLength(200)
    nome_completo!: string;

    @IsNotEmpty({ message: 'O e-mail é obrigatório' })
    @IsEmail({}, { message: 'Informe um e-mail válido' })
    @MaxLength(200)
    email!: string;

    @IsNotEmpty({ message: 'O CPF é obrigatório' })
    @MaxLength(50)
    cpf!: string;

    @IsNotEmpty({ message: 'O telefone é obrigatório' })
    @MaxLength(50)
    telefone!: string;

    @IsNotEmpty({ message: 'A senha é obrigatória' })
    @MaxLength(255)
    senha!: string;
}