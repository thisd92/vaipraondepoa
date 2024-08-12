const router = require('./routes');
const wpTermController = require("../controllers/termController");

router.get("/terms", wpTermController.getAllTerms);
router.get("/terms/:id", wpTermController.getTermById);

module.exports = router;
