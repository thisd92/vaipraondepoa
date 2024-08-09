const express = require("express");

require("dotenv").config({
  path: ".env",
});

require("./db");

const app = express();
const port = process.env.PORT || 8090;

app.use(express.json());

const listingRouter = require("./routes/listingRoute");
app.use("/api", listingRouter);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Internal Error!");
});

// Verifica se o arquivo está sendo executado diretamente
if (require.main === module) {
  app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });
}

module.exports = app;
