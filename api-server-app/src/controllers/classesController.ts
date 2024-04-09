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
    async create(req:Request, res:Response){
        try{

            const repoCoahce = getRepository(Coaches);
            const repoClass = getRepository(Classes);
            const repoSche = getRepository(ClassesSchedule);
          
            const { name, avatar, whatsapp, bio, subject, cost, schedule } = req.body;
          
            const coache = new Coaches();
            coache.avatar = avatar;
            coache.name = name;
            coache.whatsapp;
            coache.bio = bio;
          
            const coacheSaved = await repoCoahce.save(coache);
            const classes = new Classes();
            classes.subject = subject;
            classes.cost = cost;
            classes.coaches = coacheSaved;
            const classeSaved = await repoClass.save(classes);
          
           let aulas = schedule.map((element:any) => {
              const aulas = new ClassesSchedule();
              aulas.classes = classeSaved;
              aulas.hourIni = convertHourStringToNumber(element.hourIni);
              aulas.hourFin = convertHourStringToNumber(element.hourFin);
              return aulas;
            });
          
            const aulasSaved = await repoSche.save(aulas);
          
            res.status(200).send({ coache: coacheSaved, classes: classeSaved, schedule: aulasSaved });
        }catch (err){
          return res.status(400).json({error:err})
        }  
    }
}