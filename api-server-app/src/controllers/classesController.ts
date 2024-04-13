import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { ClassesSchedule } from "../domain/classe_schedule";
import { Classes } from "../domain/classes";
import { Coaches } from "../domain/coaches";
import { convertHourStringToNumber } from "../utils/convert";

export default class ClassController {
  async filter(req: Request, res: Response) {
    const filters = req.query;
    console.log(req.query);
    // if(!filters.weekDay || !filters.subject || !filters.time ){
    //     return res.status(400).json({error:'Missing filters search not in'})
    // }

    const query = getRepository(Classes)
      .createQueryBuilder("classes")
      .leftJoinAndSelect("classes.coache", "coache")
      .leftJoinAndSelect("classes.classesSchedule", "classesSchedule");
    // if(filters.weekDay || filters.subject || filters.time){
    //     query.where(`classes.subject LIKE :subject`, {subject:`%${filters.subject}%`})
    // }

    if (filters.subject) {
        query.andWhere("classes.subject LIKE :subject", { subject: `%${filters.subject}%` });
    }
    if (filters.weekDay) {
      query.andWhere("classesSchedule.weekDay = :weekDay", { weekDay: filters.weekDay });
    }
    if (filters.time) {
        console.log(filters.time)
      const time = convertHourStringToNumber(filters.time as string);
      query.andWhere("classesSchedule.hourIni <= :time AND classesSchedule.hourFin >= :time", { time: time });
    }

    // query.andWhere('deleted=0');

    const data = await query.getMany();

    res.status(200).send(data);
  }
  async create(req: Request, res: Response) {
    try {
      const repoCoahce = getRepository(Coaches);
      const repoClass = getRepository(Classes);
      const repoSche = getRepository(ClassesSchedule);

      const { name, avatar, whatsapp, bio, subject, cost, schedule } = req.body;

      const coache = new Coaches();
      coache.avatar = avatar;
      coache.name = name;
      coache.whatsapp=whatsapp;
      coache.bio = bio;
      const coacheSaved = await repoCoahce.save(coache);

      const classes = new Classes();
      classes.subject = subject;
      classes.cost = cost;
      classes.coache = coacheSaved;
      const classeSaved = await repoClass.save(classes);

      let aulas = schedule.map((element: any) => {
        const aulas = new ClassesSchedule();
        aulas.classes = classeSaved;
        aulas.weekDay = element.weekDay;
        aulas.hourIni = convertHourStringToNumber(element.hourIni);
        aulas.hourFin = convertHourStringToNumber(element.hourFin);
        return aulas;
      });

      const aulasSaved = await repoSche.save(aulas);

      res.status(200).send({ coache: coacheSaved, classes: classeSaved, schedule: aulasSaved });
    } catch (err) {
      return res.status(400).json({ error: err });
    }
  }
}
