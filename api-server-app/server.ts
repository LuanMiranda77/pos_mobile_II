import express from "express";
import { createConnection, getRepository } from "typeorm";
import { UserApp } from "./src/domain/userApp";

const app = express();
app.use(express.json);
const PORT = 5000;

// const configPath: ConnectionOptions = {
//   type: "sqlite",
//   database: "src/database/database.sqlite",
//   synchronize: true,
//   logging: false,
//   entities: [UserApp],
// };

app.get("/", async (req, res)   => {
  const data = await getRepository(UserApp)
    .find()
  // res.send("Hello, World!");
  res.send(data)
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

createConnection()
  .then(() => {
    console.log("Connected to the database");
  })
  .catch((error) => {
    console.error("Error database:", error);
  });
