import express from "express";

const app = express();

const obj = {};

app.get('/', (req, res) => {
  res.json({
    message: "Yeah it's deployed....!"
  })
})

app.post('/', (req, res) => {
  const { key, value } = res.body;
  obj[key] = value;

  res.json({
    message: "Record added....!"
  })
})

app.listen(3000, () => {
  console.log("application is listening on port 3000");
})
