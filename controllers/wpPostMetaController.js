const WpPostmeta = require("../models/wp-postmeta");

exports.getAllPostmeta = async (req, res) => {
  try {
    const postmeta = await WpPostmeta.findAll();
    res.json(postmeta);
  } catch (error) {
    res.status(500).send("Error fetching postmeta");
  }
};

exports.getPostmetaById = async (req, res) => {
  try {
    const postmeta = await WpPostmeta.findByPk(req.params.id);
    if (postmeta) {
      res.json(postmeta);
    } else {
      res.status(404).send("Postmeta not found");
    }
  } catch (error) {
    res.status(500).send("Error fetching postmeta by ID");
  }
};