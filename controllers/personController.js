const data = {};
data.person = require("../models/personModel");
module.exports.getAllPerson = (req, res, next) => {
  const { limit } = req.query;
  res.json(data.person.slice(10, limit));
};

module.exports.getRandomUser = (req, res, next) => {
  const allUser = data.person;
  const user = allUser[Math.floor(Math.random() * allUser.length)];
  res.json(user);
};
