import morgan from "morgan";
import thingsRouter from "./fetaures/things/router/thingsRouter.js";
import express from "express";
import chalk from "chalk";

const app = express();
const port = process.env.PORT ?? 4000;

app.listen(+port, () => {
  console.log(chalk.green(`Listening on http://localhost:${port}`));
});

app.use(morgan("dev"));

app.use("/things", thingsRouter);

app.use(express.json());
