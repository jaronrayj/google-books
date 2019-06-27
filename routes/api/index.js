const router = require("express").Router();
import bookRoutes from "./books";

router.use("/books", bookRoutes);

module.exports = router;