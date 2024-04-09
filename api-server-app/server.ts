import express, { Router } from "express";
import { createConnection, getRepository } from "typeorm";
import { routes } from "./src/routes";

import cors from "cors";

const app = express();


app.use(cors());
app.use(express.json());
app.use(routes);

const PORT = 5000;

app.listen(PORT || 5000, (err: any) => {
  if (err) {
    return console.error(err);
  }
  console.log("Servidor rodando na porta %d em modo %s", PORT || 5000, app.settings.env);
});


createConnection()
  .then(() => {
    console.log("Connected to the database");
  })
  .catch((error) => {
    console.error("Error database:", error);
  });
