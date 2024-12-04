import express from "express";
import dotenv from "dotenv";
import bodyParser  from "body-parser";
import mongoose from "mongoose"
import route from "./routes/userRouter.js";

dotenv.config()

const app = express();
const port = process.env.PORT || 5000 ;
const mongourl = process.env.MONGO_URL;
app.use(bodyParser.json())


mongoose.connect(mongourl).then(() => {
  console.log("DATABASE CONNECTED SUCCESFULLY ")
  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });
  
}
).catch((error) => { console.log(error)})

app.use("/api-user",route)