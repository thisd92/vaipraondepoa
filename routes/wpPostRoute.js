const router = require('./routes');
const wpPostController = require("../controllers/wpPostController");

router.get("/posts", wpPostController.getAllPosts);
router.get("/posts/:id", wpPostController.getPostById);

module.exports = router;
