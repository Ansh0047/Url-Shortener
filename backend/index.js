import express from "express";
import urlRoute from "./routes/url.js";
import { connectDb } from "./data/db.js";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const port = process.env.PORT;

connectDb();
const app = express();

app.use(express.json());
app.use(cors({
  origin: "http://localhost:5173",
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));


app.use("/url", urlRoute);

app.get("/", (req,res) => {
    res.send("Wlcm to the Url shortener");
});

app.listen(port,() => {
    console.log(`Server is working on Port ${port}`);
})