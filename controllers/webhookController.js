const { getAllPosts } = require("../controllers/wpPostController");

exports.sendWebhookapp = async (req, res) => {
  try {
    const posts = await getAllPosts();

    if (global.io) {
      global.io.emit("update", posts);
    }

    res.status(200).send("Webhook received");
  } catch (error) {
    console.error("Error fetching posts:", error);
    res.status(500).send("Error processing webhook");
  }
};
