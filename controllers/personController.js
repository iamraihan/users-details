const data = {};
data.person = require("../models/personModel");
module.exports.getAllPerson = (req, res, next) => {
  res.json(data.person);
  console.log(data.person);
};

module.exports.getRandomUser = (req, res, next) => {
  const allUser = data.person;

  const user = allUser[Math.floor(Math.random() * allUser.length)];
  res.json(user);
};
