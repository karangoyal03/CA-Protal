const express = require('express')
const app = express();
const apiroute = require('./routes/api/index')
const path = require('path')
const mongoose = require('mongoose')
mongoose.Promise = global.Promise; //ES6 promise

mongoose.connect("mongodb://localhost:27017/caportal", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection
  .once("open", () => {
    console.log("connected");
  })
  .on("error", (error) => {
    console.log("Your error ", error);
  });

app.use(express.json());

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.static(path.join(__dirname,'/views')))

app.use('/api',apiroute)

app.listen(5666,()=>{

    console.log('server has started')
})