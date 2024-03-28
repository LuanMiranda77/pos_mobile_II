
import { BeforeInsert, Column, CreateDateColumn, PrimaryColumn, UpdateDateColumn } from "typeorm";
import {v4 as uuid} from "uuid";
import bcrypt from "bcrypt";
import {
    Contains,
    IsInt,
    Length,
    IsEmail,
    IsFQDN,
    IsDate,
    Min,
    Max,
} from "class-validator"

class UserApp{
    @PrimaryColumn()
    readonly id: string | undefined;

    @Column() 
    name: string;

    @Column() 
    @IsEmail()
    email: string;

    @Column() 
    password: string;

    @CreateDateColumn()
    createData: Date;
  
    @UpdateDateColumn()
    updateDate: Date | null;





    constructor(){
        if(!this.id){
          this.id = uuid();
        }
        this.name='';
        this.email='';
        this.password='';
        this.createData=new Date();
        this.updateDate=null;
    }

    @BeforeInsert()
    async hashPassword() {
        this.password = await bcrypt.hash(this.password, 10);
    }
}

export {UserApp};