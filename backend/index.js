import express from "express"
import cors from "cors"
import dotenv from "dotenv"

import connectDB from "./config/db.js"

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

connectDB();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("API is running.");
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});