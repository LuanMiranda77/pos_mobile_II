import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuid } from "uuid";
import { Coaches } from "./coaches";

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
  coaches: Coaches;

  @CreateDateColumn()
  createDate: Date;

  @UpdateDateColumn({nullable: true})
  updateDate: Date | null;

  @Column()
  deleted: number;

  constructor() {
    this.id = uuid();
    this.subject = "";
    this.cost = "";
    this.coaches = new Coaches();
    this.createDate = new Date();
    this.updateDate = null;
    this.deleted = 0;
  }
}

export { Classes };
