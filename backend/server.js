import express from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
// On passe sur le port 5000 pour contourner les blocages du port 3000
const PORT = process.env.PORT || 5000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(cors());
app.use(express.json());

// ==========================================
// 1. VOS ROUTES API
// ==========================================

app.get('/api/github', async (req, res) => {
    res.json({ message: "Connexion à l'API GitHub réussie" });
});

app.post('/api/contact', (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ error: "Tous les champs sont obligatoires." });
    }

    const nouveauMessage = {
        id: Date.now(),
        name,
        email,
        message,
        date: new Date().toISOString()
    };

    const cheminFichier = path.join(__dirname, 'messages.json');

    fs.readFile(cheminFichier, 'utf8', (err, data) => {
        let listeMessages = [];
        if (!err && data) {
            try { listeMessages = JSON.parse(data); } catch (e) { listeMessages = []; }
        }
        listeMessages.push(nouveauMessage);
        fs.writeFile(cheminFichier, JSON.stringify(listeMessages, null, 2), (writeErr) => {
            if (writeErr) return res.status(500).json({ error: "Erreur de sauvegarde." });
            return res.status(200).json({ success: true, message: "Message enregistré." });
        });
    });
});

// ==========================================
// 2. FICHIERS STATIQUES & ROUTAGE CLIENT
// ==========================================
const cheminDist = path.resolve(__dirname, '../frontend/dist');
app.use(express.static(cheminDist));

// Avec Express 4, cette syntaxe refonctionne parfaitement sans planter !
app.get('*', (req, res) => {
    res.sendFile(path.join(cheminDist, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Serveur en cours d'exécution sur le port ${PORT}`);
});