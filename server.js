import express from 'express';
import cors from 'cors';
import fs from 'fs';
import nodemailer from 'nodemailer';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Configuration du transporteur d'e-mails (Gmail)
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'micheldanaika@gmail.com',
        pass: 'rejr xgqi hcjc ccud'
    }
});

// Route pour recevoir, enregistrer et envoyer par e-mail
app.post('/api/contact', async (req, res) => {
    const nouveauMessage = req.body;

    // 1. Enregistrement dans messages.json
    fs.readFile('messages.json', 'utf8', (err, data) => {
        let messages = [];
        if (!err && data) {
            try {
                messages = JSON.parse(data);
            } catch (e) {
                messages = [];
            }
        }

        messages.push({ ...nouveauMessage, date: new Date() });

        fs.writeFile('messages.json', JSON.stringify(messages, null, 2), async (err) => {
            if (err) {
                return res.status(500).json({ error: "Erreur lors de l'enregistrement du message." });
            }

            // 2. Envoi de l'e-mail à toi et à ton groupe
            try {
                const mailOptions = {
                    from: nouveauMessage.email,
                    to: 'isteah.dmichel20@gmail.com, Isteah.csanon02@gmail.com,isteah.disidore2@gmail.com, isteah.mblaurane@gmail.com', // ⚠️ Mets ici tous les e-mails du groupe séparés par des virgules
                    subject: `Nouveau message de contact de ${nouveauMessage.name || 'Visiteur'}`,
                    text: `Nom: ${nouveauMessage.name}\nEmail: ${nouveauMessage.email}\nMessage: ${nouveauMessage.message}`
                };

                await transporter.sendMail(mailOptions);
                console.log("E-mail envoyé avec succès !");
                res.status(200).json({ success: "Message enregistré et e-mail envoyé !" });
            } catch (emailError) {
                console.error("Erreur lors de l'envoi de l'e-mail:", emailError);
                res.status(200).json({ success: "Message enregistré, mais échec de l'envoi de l'e-mail." });
            }
        });
    });
});

app.listen(PORT, () => {
    console.log(`Serveur en cours d'exécution sur le port ${PORT}`);
});