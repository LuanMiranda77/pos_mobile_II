import { BeforeInsert, Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuid } from "uuid";
import { Coaches } from "./coaches";

@Entity()
class Connections {
  @PrimaryColumn()
  id: string;

  @ManyToOne(() => Coaches, (coaches) => coaches.id, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
  @JoinColumn({ name: "coaches_id" })
  coaches: Coaches;

  @CreateDateColumn()
  createDate: Date;

  @UpdateDateColumn()
  updateDate: Date | null;

  @Column()
  deleted: number;

  constructor() {
    this.id = uuid();
    this.coaches = new Coaches();
    this.createDate = new Date();
    this.updateDate = null;
    this.deleted = 0;
  }

  @BeforeInsert()
  async hashPassword() {
    this.createDate = new Date();
  }
}

export { Connections };
