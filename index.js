import express from "express";
import Connection from "./Server/db.js";

const app = express();

const port = 8000;
Connection();
app.listen(port,()=>{
    console.log(`Server is running on port${port}`);
});

