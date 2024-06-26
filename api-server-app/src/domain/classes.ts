import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuid } from "uuid";
import { Coaches } from "./coaches";
import { ClassesSchedule } from "./classe_schedule";

@Entity()
class Classes {
  @PrimaryColumn()
  id: string;

  @Column()
  subject: string;

  @Column()
  cost: string;

  @ManyToOne(() => Coaches, (coaches) => coaches.id, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
  @JoinColumn({ name: "coaches_id" })
  coache: Coaches;

  @CreateDateColumn()
  createDate: Date;
 
  @UpdateDateColumn({nullable: true})
  updateDate: Date | null;

  @OneToMany(() => ClassesSchedule, (classesSchedule) => classesSchedule.classes)
  classesSchedule: Array<ClassesSchedule> | null;

  @Column()
  deleted: number;

  constructor() {
    this.id = uuid();
    this.subject = "";
    this.cost = "";
    this.coache = new Coaches();
    this.createDate = new Date();
    this.updateDate = null;
    this.classesSchedule  = null;
    this.deleted = 0;
  }
}

export { Classes };
