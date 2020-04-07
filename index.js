const express = require("express");
const app = express();

app.get('/', (req, res)=>{
  return res.send("Servidor NodeJS!");
})

app.listen(3333, ()=>{
  console.log("Server runing in  http://localhost:3333");
})
