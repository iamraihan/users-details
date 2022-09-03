const express = require("express");
const personController = require("../controllers/personController");
const router = express.Router();

router.route("/").get(personController.getAllPerson);
router.route("/random").get(personController.getRandomUser);

module.exports = router;
