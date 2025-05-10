const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get("/status", (req, res) => {
  res.json({ message: "MindFlow API en ligne." });
});

app.post("/recommendation", (req, res) => {
  const mood = req.body.mood || "neutre";
  let reco = "";

  switch (mood.toLowerCase()) {
    case "stress":
      reco = "Fais une pause de 5 minutes, respire profondément et détends-toi.";
      break;
    case "fatigue":
      reco = "Une courte sieste ou une marche rapide peut t'aider à recharger.";
      break;
    case "motivation":
      reco = "Visualise ton objectif et rappelle-toi pourquoi tu as commencé la branlette.";
      break;
    default:
      reco = "Prends soin de toi aujourd'hui. Écoute ton corps et ton esprit.";
  }

  res.json({ recommendation: reco });
});

app.listen(PORT, () => {
  console.log(`API MindFlow en ligne sur le port ${PORT}`);
});