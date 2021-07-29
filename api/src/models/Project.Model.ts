import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, BeforeInsert, BeforeUpdate, OneToMany } from 'typeorm';
import { IsDefined, MaxLength, MinLength, validateOrReject } from 'class-validator';
import { ProjectStage } from './ProjectStage.Enum';
import { Document } from './Document.Model';

@Entity()
export class Project extends BaseEntity {

  @PrimaryGeneratedColumn('uuid')
  public id?: string;

  @IsDefined()
  @MaxLength(64, { message: 'Máximo de 64 caracteres no título.' })
  @MinLength(4, { message: 'Mínimo de 4 caracteres no título.' })
  @Column()
  public title?: string;

  @IsDefined()
  @MaxLength(2048, { message: 'Máximo de 2048 caracteres permitidos no resumo.' })
  @Column()
  public summary?: string;

  @IsDefined()
  @MaxLength(64, { message: 'Máximo de 64 caracteres permitidos no nome do autor.' })
  @MinLength(4, { message: 'Mínimo de 4 caracteres permitidos no nome do autor.' })
  @Column()
  public authorName?: string;

  @IsDefined()
  @MaxLength(11, { message: 'O CPF do autor precisa conter 11 dígitos.' })
  @MinLength(11, { message: 'O CPF do autor precisa conter 11 dígitos.' })
  @Column()
  public authorCpf?: string;

  @IsDefined()
  @MaxLength(64, { message: 'Máximo de 64 caracteres permitidos no nome do orientador.' })
  @MinLength(4, { message: 'Mínimo de 4 caracteres permitidos no nome do orientador.' })
  @Column()
  public advisorName?: string;

  @IsDefined()
  @MaxLength(11, { message: 'O CPF do orientador precisa conter 11 dígitos.' })
  @MinLength(11, { message: 'O CPF do orientador precisa conter 11 dígitos.' })
  @Column()
  public advisorCpf?: string;

  @OneToMany(type => Document, document => document.project, { cascade: true })
  public fileDocuments?: Document[];

  @IsDefined()
  @MaxLength(32, { message: 'Tamanho máximo do campo curso é de 32 caracteres.' })
  @MinLength(4, { message: 'Tamanho mínimo do campo curso é de 4 caracteres.' })
  @Column()
  public courseName?: string;

  @IsDefined()
  @Column()
  public projectStage?: ProjectStage;

  @BeforeInsert()
  @BeforeUpdate()
  async validate() {
    await validateOrReject(this);
  }

}