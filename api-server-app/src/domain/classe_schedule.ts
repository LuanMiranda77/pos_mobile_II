import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuid } from "uuid";
import { Coaches } from "./coaches";
import { Classes } from "./classes";

@Entity()
class ClassesSchedule {
  @PrimaryColumn()
  id: string;

  @Column()
  weekDay: number;

  @Column()
  hourIni: number;

  @Column()
  hourFin: number;

  @ManyToOne(() => Classes, (classes) => classes.id, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
  @JoinColumn({ name: "classes_id" })
  classes: Classes;

  @CreateDateColumn()
  createDate: Date;

  @UpdateDateColumn({nullable: true})
  updateDate: Date | null;

  @Column()
  deleted: number;

  constructor() {
    this.id = uuid();
    this.weekDay = 0;
    this.hourIni = 0;
    this.hourFin = 0;
    this.classes = new Classes();
    this.createDate = new Date();
    this.updateDate = null;
    this.deleted = 0;
  }
}

export { ClassesSchedule };
