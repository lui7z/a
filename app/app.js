const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

const musicRoutes = require("./routes/musicRoutes");
app.use("/musicas", musicRoutes);

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});

app.get("/", (req, res) => {
  res.json(
    `Seja bem vindo ao VPS rodando Node.JS pelo Docker na porta ${port}`
  );
});

app.get("/cdfs", (req, res) => {
  res.json(["Gabriel Fróes", "Vanessa Weber"]);
});
