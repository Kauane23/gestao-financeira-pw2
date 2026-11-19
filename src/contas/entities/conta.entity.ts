import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('conta')
export class Conta extends BaseEntity {

  @PrimaryGeneratedColumn({ name: 'id_conta' })
  id!: number;

  @Column({ type: 'varchar', length: 100, nullable: true })
  nome!: string | null;

  @Column({ type: 'varchar', length: 150, nullable: true })
  nome_instituicao!: string | null;

  @Column({ type: 'varchar', length: 100 })
  tipo!: string;

  @Column({ type: 'float' })
  saldo_atual!: number;

  @Column({ type: 'int' })
  id_usuario_fk!: number;
}
