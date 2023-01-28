import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

import classificationsRouter from "./routers/classificationsRouters.js";
import curiositiesRouter from "./routers/curiositiesRouters.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use(classificationsRouter);
app.use(curiositiesRouter);

const port: string = process.env.PORT;
app.listen(port, (): void => console.log(`App running on port ${port}`));
