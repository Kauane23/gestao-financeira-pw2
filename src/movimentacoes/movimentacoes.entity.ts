
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Movimentacao')
export class Movimentacoes extends BaseEntity {

    @PrimaryGeneratedColumn({ name: 'id_movimentacao' })
    id!: number;

    @Column({ type: 'float' })
    valor!: number;

    @Column({ type: 'date' })
    data_movimentacao!: Date;

    @Column({ type: 'text', nullable: true })
    descricao!: string | null;

    @Column({ type: 'int' })
    id_conta_fk!: number;

    @Column({ type: 'int' })
    id_categoria_fk!: number;
}