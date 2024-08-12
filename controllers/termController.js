const WpTerm = require("../models/terms");

exports.getAllTerms = async (req, res) => {
  try {
    const terms = await WpTerm.findAll();
    res.json(terms);
  } catch (error) {
    res.status(500).send("Error fetching terms");
  }
};

exports.getTermById = async (req, res) => {
  try {
    const term = await WpTerm.findByPk(req.params.id);
    if (term) {
      res.json(term);
    } else {
      res.status(404).send("Term not found");
    }
  } catch (error) {
    res.status(500).send("Error fetching term by ID");
  }
};
