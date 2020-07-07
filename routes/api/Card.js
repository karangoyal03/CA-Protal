const route = require("express").Router();
const Card = require("./../../models/Card");

route.get("/cardname", (req, res) => {
  Card.findOne({ cardname: req.query.cardname })
    .then((card) => {
      res.status(200).send(card);
    })
    .catch((err) => {
      console.log("error for finding card by name", err);
      res.status(500).send({
        error: "could not find card by name",
      });
    });
});

route.get("/delete", (req, res) => {
  Cart.deleteOne({ _id: req.query.id })
    .then(() => {
      res.send({
        message: " cart removed successfully",
      });
    })
    .catch((err) => {
      console.log(err);
      res.send("error in deleting from cart");
    });
});

route.get("/", (req, res) => {
  Card.find()
    .then((cards) => {
      res.status(200).send(cards);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({
        error: "could not find cards",
      });
    });
});

route.post("/", (req, res) => {
  const cards = new Card({
    category: req.body.category,
    icon: req.body.icon,
    cardinfo: req.body.cardinfo,
    cardname: req.body.cardname,
  });

  cards
    .save()
    .then((card) => {
      res.status(201).send(card);
    })
    .catch((err) => {
      res.status(501).send({
        error: "could not add new card",
      });
    });
});

module.exports = route;
