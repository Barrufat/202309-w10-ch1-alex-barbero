import morgan from "morgan";
import express from "express";
import app from "./app.js";
import thingsRouter from "./features/things/router/thingsRouter.js";
import PingController from "./features/ping/Controller/PingController.js";

const pingController = new PingController();

app.use(express.json());
app.use(morgan("dev"));

app.get("/", pingController.getPong);
app.use("/things", thingsRouter);
