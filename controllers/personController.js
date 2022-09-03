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
