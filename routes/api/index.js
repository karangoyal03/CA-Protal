const route = require('express').Router();
const Informationroute = require('./information')
const Cardroute = require('./Card');


route.use('/information',Informationroute)
route.use('/card',Cardroute);

module.exports=route;