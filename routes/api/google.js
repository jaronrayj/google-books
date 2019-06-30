const router = require("express").Router();
const google = require("../../controllers/googleController");

router
    .route("/:search")
    .get(google.findAll);

module.exports = router;