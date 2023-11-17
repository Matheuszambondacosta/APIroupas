import express from "express";
import { config } from "dotenv";
import rotasRoupas from "./routes/roupas.routes.js";

config();

const port = process.env.PORT || 5000;

const app = express();
app.use(express.json());
app.use(rotasRoupas);

app.get("/", (req, res) => {
  return res.status(200).send({ message: "Está Funcionando" });
});

app.listen(port, () =>
  console.log(`⚡ Server started on http://localhost:${port}`)
);