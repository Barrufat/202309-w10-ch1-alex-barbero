import "dotenv/config";
import express from "express";
import chalk from "chalk";

const app = express();
const PORT = process.env.PORT ?? 4000;

app.listen(+PORT, () => {
  console.log(chalk.green(`Listening on http://localhost:${PORT}`));
});

export default app;
