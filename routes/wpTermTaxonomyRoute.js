const router = require("./routes");
const termTaxonomyController = require("../controllers/termTaxonomyController");

router.get("/term-taxonomies", termTaxonomyController.getAllTermTaxonomies);
router.get("/term-taxonomies/:id", termTaxonomyController.getTermTaxonomyById);

module.exports = router;
