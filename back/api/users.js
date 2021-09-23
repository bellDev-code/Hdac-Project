const controller = require("../controllers/controller");

const router = require("express").Router();

// user router
router.get("/whoami", controller.whoami);

module.exports.users = router;
