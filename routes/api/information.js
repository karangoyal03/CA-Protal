const route = require("express").Router();
const Information = require("../../models/information");

route.get("/", (req, res) => {
  Information.find()
    .then((info) => {
      res.status(200).send(info);
    })
    .catch((err) => {
      console.log("my error in doing information task is", err);
      res.status(500).send({
        error: "cannot find all information of the users",
      });
    });
});

route.post("/", (req, res) => {
  const information = new Information({
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    city: req.body.city,
    service: req.body.service,
  });
  information
    .save()
    .then((info) => {
      res.status(201).send(info);
    })
    .catch((err) => {
      console.log("my error in doing information task is", err);
      res.status(501).send({
        error: "cannot add new information in the dashborad list",
      });
    });
});

module.exports = route;
