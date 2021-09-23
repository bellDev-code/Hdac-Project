const router = require("express").Router();
const { users } = require("./users");

router.use("/users", users);

//product

module.exports.api = router;
