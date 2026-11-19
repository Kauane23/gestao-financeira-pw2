import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('usuario')
export class Usuario extends BaseEntity {

  @PrimaryGeneratedColumn({ name: 'id_usuario' })
  id!: number;

  @Column({ type: 'varchar', length: 200 })
  nome_completo!: string;

  @Column({ type: 'varchar', length: 200, unique: true })
  email!: string;

  @Column({ type: 'varchar', length: 50, unique: true })
  cpf!: string;

  @Column({ type: 'varchar', length: 50 })
  telefone!: string;

  @Column({ type: 'varchar', length: 255 })
  senha!: string;
}