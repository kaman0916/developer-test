import "dotenv/config";
import express from "express";
import { photoRouter } from "./routers/photo.router";
import cors from "cors";

const app = express();
const port = process.env.PORT;
app.use(cors());

app.use("/photo", photoRouter);

app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
