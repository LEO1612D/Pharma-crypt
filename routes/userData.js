const router = require("express").Router();
const verify = require("./verifyToken");
const User = require("../model/User");

router.get("/:id", verify, (req, res) => {
  const data = req.params.id;
  res.json(data);
});

module.exports = router;
