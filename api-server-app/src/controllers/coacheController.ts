import { getRepository } from 'typeorm';
import { Request, Response } from "express";
import { ClassesSchedule } from "../domain/classe_schedule";
import { convertHourStringToNumber } from "../utils/convert";
import { Classes } from "../domain/classes";
import { Coaches } from "../domain/coaches";

export default class ClassController{
    async filter(req:Request, res:Response){
        const filters = req.query;
        console.log(req.query)
        if(!filters.weekDay || !filters.subject || !filters.time ){
            return res.status(400).json({error:'Missing filters search not in'})
        }

        const time = convertHourStringToNumber(filters.time as string);
        const repoClass = await getRepository(Classes).createQueryBuilder('classes')
        // .leftJoinAndSelect('classes.coaches.id=:id', {id:filters.subject})
        .where(`classes.subject LIKE :subject`, {subject:`%${filters.subject}%`}).andWhere('deleted=0').getMany();

        res.status(200).send(repoClass);
    }
    
}