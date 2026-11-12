import { IsNotEmpty } from 'class-validator';

export class CreateCategoriaDto {
  @IsNotEmpty({ message: 'Informe o nome da categoria.' })
  nome: string;
}
