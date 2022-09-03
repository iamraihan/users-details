const express = require("express");
const personController = require("../controllers/personController");
const router = express.Router();

router.route("/all").get(personController.getAllPerson);
router.route("/random").get(personController.getRandomUser);

router.route("/save").post(personController.saveAUser);
router.route("/:id").patch(personController.updateARandomUser);
router.route("/bulk-update").patch(personController.updateMultipleUser);
router.route("/:id").delete(personController.deleteUser);

module.exports = router;
