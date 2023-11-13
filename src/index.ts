import morgan from "morgan";
import app from "./app.js";
import thingsRouter from "./thingsRouter.js";

app.use(morgan("dev"));

app.use("/things", thingsRouter);

app.use((_req, res) => {
  res.status(404).json({ error: "Endpoint not found" });
});
