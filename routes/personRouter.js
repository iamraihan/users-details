const express = require("express");
const personController = require("../controllers/personController");
const router = express.Router();

router.route("/all").get(personController.getAllPerson);
router.route("/random").get(personController.getRandomUser);

router.route("/save").post(personController.saveAUser);

module.exports = router;
