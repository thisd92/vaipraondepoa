const router = require('./routes');
const wpPostmetaController = require("../controllers/wpPostMetaController");

router.get("/postmeta", wpPostmetaController.getAllPostmeta);
router.get("/postmeta/:id", wpPostmetaController.getPostmetaById);

module.exports = router;
