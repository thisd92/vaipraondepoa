const express = require("express");
const http = require("http");
const cors = require("cors");
const socketIo = require("socket.io");

require("dotenv").config({
  path: ".env",
});

require("./db");

const app = express();
const port = process.env.PORT || 8090;

app.use(
  cors({
    origin: "http://localhost:3000", // Substitua pelo seu frontend URL
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// Criação do servidor HTTP
const server = http.createServer(app);

// Configuração do Socket.IO com o servidor HTTP
const io = socketIo(server, {
  cors: {
    origin: "http://localhost:3000", // Substitua com o URL do seu frontend
    methods: ["GET", "POST"],
  },
});

// Configuração do WebSocket
io.on("connection", (socket) => {
  console.log("Client connected");

  socket.on("disconnect", () => {
    console.log("Client disconnected");
  });
});

// Middlewares e rotas
app.use(express.json());

const listingRouter = require("./routes/listingRoute");
const wpTermRouter = require("./routes/wpTermRoute");
const wpTermRelationshipRouter = require("./routes/wpTermRelationshipRoute");
const termTaxonomyRouter = require("./routes/wpTermTaxonomyRoute");
const wpPostRouter = require("./routes/wpPostRoute");
const wpPostmetaRouter = require("./routes/wpPostmetaRoute");
const webhookRouter = require("./routes/webhookRoute");

app.use("/api", listingRouter);
app.use("/api", wpTermRouter);
app.use("/api", wpTermRelationshipRouter);
app.use("/api", termTaxonomyRouter);
app.use("/api", wpPostRouter);
app.use("/api", wpPostmetaRouter);
app.use("/webhook", webhookRouter);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Internal Error!");
});

// Inicia o servidor
server.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

// Exporta o servidor e o Socket.IO (se necessário para outros arquivos)
module.exports = { app, io };
