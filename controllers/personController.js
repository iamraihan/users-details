const { all } = require("../routes/personRouter");

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

module.exports.saveAUser = (req, res) => {
  const allUser = data.person;
  console.log(req.body._id);
  //   const id = req.body.id;
  //   const users = allUser.map((user) => user._id);
  //   if (users == id) {
  // } else {
  //     res.send("user already exists");
  // }
  allUser.push(req.body);
  res.send(allUser);
  //   const newUser = allUser.find(user => user = -1)
};

module.exports.updateARandomUser = (req, res) => {
  const { id } = req.params;
  const allUser = data.person;
  let existUser = allUser.find((user) => user._id == id);
  existUser = req.body;
  res.send(existUser);
};
