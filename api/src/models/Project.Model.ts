import { User } from './User.Model';
import { Document } from './Document.Model';
import { ProjectStage } from './ProjectStage.Enum';
import { IsDefined, MaxLength, MinLength, validateOrReject } from 'class-validator';
import { OneToMany, JoinColumn, ManyToOne } from 'typeorm';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { BaseEntity, BeforeInsert, BeforeUpdate } from 'typeorm';

@Entity()
export class Project extends BaseEntity {

  @PrimaryGeneratedColumn('uuid')
  public id?: string;

  @IsDefined()
  @MaxLength(64)
  @MinLength(4)
  @Column()
  public title?: string;

  @IsDefined()
  @MaxLength(2048)
  @Column()
  public summary?: string;

  @ManyToOne(() => User, user => user.projects)
  public author?: User;

  @IsDefined()
  @MaxLength(64)
  @MinLength(4)
  @Column()
  public advisorName?: string;

  @OneToMany(() => Document, document => document.project, { cascade: true })
  @JoinColumn()
  public fileDocuments?: Document[];

  @IsDefined()
  @MaxLength(32)
  @MinLength(4)
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