// const express = require("express");
import express, { Request, Response } from "express";
import { Pool } from "pg";
const app = express();
const port = 5000;

// parse application/json
app.use(express.json());
// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

const pool = new Pool({
  connectionString: `postgresql://neondb_owner:npg_WEX7tSBYhri5@ep-proud-cell-a48oj3cx-pooler.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require`,
});

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});
app.post("/data", (req: Request, res: Response) => {
  console.log(req.body);
  res.status(200).json({
    success: true,
    message: "Data received successfully",
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
