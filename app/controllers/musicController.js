let musicas = [];
let nextId = 1;

exports.getAll = (req, res) => {
  res.json(musicas);
};

exports.create = (req, res) => {
  const { nome, artista, genero, tempo } = req.body;

  if (!nome || !artista || !genero || !tempo) {
    return res.status(400).json({ erro: "Todos os campos são obrigatórios" });
  }

  const novaMusica = {
    id: nextId++,
    nome,
    artista,
    genero,
    tempo
  };

  musicas.push(novaMusica);
  res.status(201).json(novaMusica);
};

exports.remove = (req, res) => {
  const id = parseInt(req.params.id);
  const index = musicas.findIndex((m) => m.id === id);

  if (index === -1) {
    return res.status(404).json({ erro: "Música não encontrada" });
  }

  const removida = musicas.splice(index, 1);
  res.json(removida[0]);
};