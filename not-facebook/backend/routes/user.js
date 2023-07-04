const express = require("express");
const { register } = require("../contrllers/user");

const router = express.Router();

// router.get("/user", (req, res) => {
//   res.send("welcome from user home");
// });

router.post("/register", register);

module.exports = router;
