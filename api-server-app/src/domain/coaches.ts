import { BeforeInsert, BeforeUpdate, Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity()
class Coaches {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  avatar: string;

  @Column({ length: 15, nullable: false })
  whatsapp: string;

  @Column({ length: 255 })
  bio: string;

  @CreateDateColumn()
  createDate: Date;

  @UpdateDateColumn({nullable: true})
  updateDate: Date | null;

  @Column()
  deleted: number;

  constructor() {
    this.id = uuid();
    this.name = "";
    this.avatar = "";
    this.bio = "";
    this.whatsapp = "";
    this.createDate = new Date();
    this.updateDate = null;
    this.deleted = 0;
  }

  @BeforeInsert()
  @BeforeUpdate()
  formatarTelefone() {
    // Remover todos os caracteres não numéricos do número
    this.whatsapp = this.whatsapp.replace(/\D/g, "");

    // Aplicar a máscara do WhatsApp (XX) XXXXX-XXXX
    this.whatsapp = this.whatsapp.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");
  }
}

export { Coaches };
