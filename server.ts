import express,{ Express, Request,Response } from "express";
import cors from "cors";
import morgan from 'morgan';
import dotenv from "dotenv";
import connectDB from "./config/db";
import userRoutes from "./routes/userRoutes"
import productRoutes from "./routes/productRoutes"

const app: Express = express();
app.use(cors());

// Middleware to accept JSON in body
app.use(express.json());

// Morgan logging
app.use(morgan("dev"));
dotenv.config();

connectDB();
const port = process.env.PORT || 5599;

app.use("/api/users/", userRoutes);
app.use("/api/products/", productRoutes);



app.get('/', (req:Request, res:Response) => {
    res.send("Health Check")
}
)
app.listen(port,() => {
    console.log(`$port`)
});