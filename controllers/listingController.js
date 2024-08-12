const Listing = require("../models/listing");

exports.getAllListings = async (req, res) => {
  try {
    const listings = await Listing.findAll();
    res.json(listings);
  } catch (error) {
    res.status(500).send("Error fetching listings");
  }
};

exports.getListingById = async (req, res) => {
  try {
    const listing = await Listing.findByPk(req.params.id);
    if (listing) {
      res.json(listing);
    } else {
      res.status(404).send("Listing not found");
    }
  } catch (error) {
    res.status(500).send("Error fetching listing by ID");
  }
};

// Adicione funções para criar, atualizar e deletar listagens se necessário
