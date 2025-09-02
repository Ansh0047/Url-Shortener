import express from "express";
import urlRoute from "./routes/url.js";
import { connectDb } from "./data/db.js";
import dotenv from "dotenv";

dotenv.config();

connectDb();
const app = express();

app.use(express.json());

app.use("/url", urlRoute);

app.get("/", (req,res) => {
    res.send("Wlcm to the Url shortener");
});

app.listen(3000,() => {
    console.log("server is working fine");
})