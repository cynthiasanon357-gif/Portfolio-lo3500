import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Exemple de route pour tester le serveur
app.get('/api/github', async (req, res) => {
    // Ici tu ajouteras ta logique ou ta requête vers l'API GitHub
    res.json({ message: "Connexion à l'API GitHub réussie" });
});

app.listen(PORT, () => {
    console.log(`Serveur en cours d'exécution sur le port ${PORT}`);
});