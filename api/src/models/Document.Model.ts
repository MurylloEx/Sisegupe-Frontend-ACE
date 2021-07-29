import { IsDefined, validateOrReject } from "class-validator";
import { BaseEntity, BeforeInsert, BeforeUpdate, Column, Entity, JoinTable, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Project } from "./Project.Model";

@Entity()
export class Document extends BaseEntity {

  @PrimaryGeneratedColumn('uuid')
  public id?: string;

  @ManyToOne(() => Project, project => project.fileDocuments)
  @JoinTable()
  public project?: Project;

  @IsDefined()
  @Column()
  public fileName?: string;

  @Column()
  public isUsing?: boolean = false;

  @BeforeInsert()
  @BeforeUpdate()
  async validate() {
    await validateOrReject(this);
  }

}
