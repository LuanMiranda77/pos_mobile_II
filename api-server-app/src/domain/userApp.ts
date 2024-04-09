import bcrypt from "bcrypt";
import { IsEmail } from "class-validator";
import { BeforeInsert, Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuid } from "uuid";
@Entity()
class UserApp {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  @IsEmail()
  email: string;

  @Column()
  password: string;

  @CreateDateColumn()
  createDate: Date;

  @UpdateDateColumn({nullable: true})
  updateDate: Date | null;

  constructor() {
    this.id = uuid();
    this.name = "";
    this.email = "";
    this.password = "";
    this.createDate = new Date();
    this.updateDate = null;
  }

  @BeforeInsert()
  async hashPassword() {
    this.password = await bcrypt.hash(this.password, 10);
  }
}

export { UserApp };
