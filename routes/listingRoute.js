const router = require("./routes");

const listingController = require("../controllers/listingController");

router.get("/listings", listingController.getAllListings);
router.get("/listings/:id", listingController.getListingById);

module.exports = router;
