const WpTermTaxonomy = require("../models/term-taxonomy");

exports.getAllTermTaxonomies = async (req, res) => {
  try {
    const taxonomies = await WpTermTaxonomy.findAll();
    res.json(taxonomies);
  } catch (error) {
    res.status(500).send("Error fetching term taxonomies");
  }
};

exports.getTermTaxonomyById = async (req, res) => {
  try {
    const taxonomy = await WpTermTaxonomy.findByPk(req.params.id);
    if (taxonomy) {
      res.json(taxonomy);
    } else {
      res.status(404).send("Term taxonomy not found");
    }
  } catch (error) {
    res.status(500).send("Error fetching term taxonomy by ID");
  }
};
