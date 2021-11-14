import express from "express";
// import ... = require('...');

import { calculator } from "./calculator";

const app = express();

app.get("/ping", (_req, res) => {
  res.send("pong... xd");
});

app.post("/calculate", (req, res) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { value1, value2, op } = req.body;

  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  const result = calculator(value1, value2, op);
  res.send(result);
});

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
