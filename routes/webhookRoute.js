const router = require("./routes");

const webhookController = require("../controllers/webhookController");

router.post("/", webhookController.sendWebhookapp);

module.exports = router;
