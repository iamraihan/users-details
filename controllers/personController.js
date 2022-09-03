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
  //   const { id } = req.params;
  //   console.log(id);
  //   //   const id = req.body.id;
  //   const users = allUser.find((user) => user._id);
  //   console.log(users);
  //   if (users._id == id) {
  //    res.send
  //   } else {
  //     res.send("user already exists");
  //   }
  allUser.push(req.body);
  res.send(allUser);
};

module.exports.updateARandomUser = (req, res) => {
  const { id } = req.params;
  const allUser = data.person;
  let existUser = allUser.find((user) => user._id == id);
  existUser = req.body;
  res.send(existUser);
};
module.exports.updateMultipleUser = (req, res) => {
  const allUser = data.person;
  const newUser = req.body;
  allUser.push(newUser);

  res.send(allUser);
};

module.exports.deleteUser = (req, res) => {
  const { id } = req.params;
  let allUser = data.person;
  const filter = { _id: id };

  allUser = allUser.filter((user) => user._id != id);

  res.send(allUser);
};
