import express, { json } from "express";
import "express-async-errors";
import cors from "cors";
import router from "./routes/index.js";
import axios from 'axios'

const app = express();
app.use(json());
app.use(cors());
app.use(router);


const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

export default app;

