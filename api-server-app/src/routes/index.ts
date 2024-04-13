import express from "express";
import { getRepository } from "typeorm";
import { ClassesSchedule } from "../domain/classe_schedule";
import { Classes } from "../domain/classes";
import { Coaches } from "../domain/coaches";
import { UserApp } from "../domain/userApp";
import { convertHourStringToNumber } from "../utils/convert";
import ClassController from "../controllers/classesController";

export const routes = express.Router();

routes.get("/", async (req, res) => {
  console.log("aqui");
  res.send("Bem vindo api!!");
});

routes.get("/users", async (req, res) => {
  const data = await getRepository(UserApp).find();
  res.send(data);
});
routes.get("/aulas", async (req, res) => {
  const data = await getRepository(ClassesSchedule).find();
  res.send(data);
});

routes.get("/coaches", async (req, res) => {
  const data = await getRepository(Coaches).find({
    relations: ["classes"],
  });
  res.send(data);
});

// routes.get("/classes", async (req, res) => {
//   const data = await getRepository(Classes).find();
//   res.send(data);
// });

routes.get("/aulas", async (req, res) => {
  const data = await getRepository(ClassesSchedule).find();
  res.send(data);
});

const classController = new ClassController();

routes.post("/classes", classController.create);
routes.get("/classes", classController.filter);
