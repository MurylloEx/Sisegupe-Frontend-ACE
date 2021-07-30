import { Project } from './Project.Model';
import { IsDefined, IsEmail, MaxLength, MinLength, validateOrReject } from 'class-validator';
import { OneToMany, JoinColumn } from 'typeorm';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { BaseEntity, BeforeInsert, BeforeUpdate } from 'typeorm';

@Entity()
export class User extends BaseEntity {

  @PrimaryGeneratedColumn('uuid')
  public id?: string;

  @IsDefined()
  @MaxLength(64)
  @MinLength(4)
  @Column()
  public name?: string;

  @IsDefined()
  @MaxLength(64)
  @MinLength(4)
  @Column()
  public lastname?: string;

  @IsDefined()
  @IsEmail()
  @MaxLength(64)
  @MinLength(4)
  @Column()
  public email?: string;

  @IsDefined()
  @MaxLength(128)
  @MinLength(4)
  @Column()
  public password?: string;

  @IsDefined()
  @OneToMany(() => Project, project => project.author)
  @JoinColumn()
  public projects?: Project[];

  @IsDefined()
  @Column()
  public isConfirmed?: boolean = false;

  @BeforeInsert()
  @BeforeUpdate()
  async validate() {
    await validateOrReject(this);
  }

}