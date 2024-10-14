import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import contactRoute from "./routes/contact.route.js";
import userRoute from "./routes/user.route.js";
import dietPlanRoutes from './routes/dietPlanRoutes.js';
import cors from "cors";

import bodyParser from 'body-parser';

const app = express();

dotenv.config();

app.use(express.json());
app.use(
  cors({
    methods: ['GET', 'POST'],
    credentials: true,
    origin: true,
  })
);
export const secret_key = process.env.SECRET_KEY
const port = process.env.PORT;
const MONGO_URI = process.env.MONGO_URL;
try {
  mongoose.connect(MONGO_URI);
  console.log("mongodb connected");
} catch (error) {
  console.log(error);
}

app.use("/contact", contactRoute);
app.use("/user", userRoute);
app.use('/api/diet-plans', dietPlanRoutes);

app.listen(port, () => {
  console.log(`server is listing on port ${port}`);
});
