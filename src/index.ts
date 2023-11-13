import morgan from "morgan";
import app from "./app.js";

app.use(morgan("dev"));

app.use((_req, res) => {
  res.status(404).json({ error: "Endpoint not found" });
});
