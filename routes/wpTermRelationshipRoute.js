const router = require("./routes");
const wpTermRelationshipController = require("../controllers/termRelationshipsController");

router.get("/term-relationships", wpTermRelationshipController.getAllTermRelationships);
router.get("/term-relationships/object/:id", wpTermRelationshipController.getTermRelationshipsByObjectId);

module.exports = router;