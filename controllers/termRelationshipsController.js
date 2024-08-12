const WpTermRelationship = require("../models/term-relationship");

exports.getAllTermRelationships = async (req, res) => {
  try {
    const relationships = await WpTermRelationship.findAll();
    res.json(relationships);
  } catch (error) {
    res.status(500).send("Error fetching term relationships");
  }
};

exports.getTermRelationshipsByObjectId = async (req, res) => {
  try {
    const relationships = await WpTermRelationship.findAll({
      where: { object_id: req.params.id }
    });
    res.json(relationships);
  } catch (error) {
    res.status(500).send("Error fetching term relationships by object ID");
  }
};
