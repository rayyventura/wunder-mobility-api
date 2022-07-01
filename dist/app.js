import express, { json } from "express";
import "express-async-errors";
import cors from "cors";
import router from "./routes/index.js";
var app = express();
app.use(json());
app.use(cors());
app.use(router);
var PORT = process.env.PORT || 4000;
app.listen(PORT, function () {
    console.log("listening on port ".concat(PORT));
});
export default app;
