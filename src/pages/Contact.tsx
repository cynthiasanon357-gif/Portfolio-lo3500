import { useState } from 'react';
import '../components/Cards.css';
import '../components/Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Merci ! Votre message a bien été envoyé et enregistré.");
        setFormData({ name: '', email: '', message: '' });
      } else {
        alert("Une erreur est survenue lors de l'envoi.");
      }
    } catch (error) {
      console.error("Erreur de connexion au serveur:", error);
      alert("Impossible de joindre le serveur.");
    }
  };

  return (
    <div className="contact-container">
      <h1 className="section-title">Contactez-nous</h1>
      <p style={{ marginBottom: '1.5rem' }}>
        Un projet ou une question ? N'hésitez pas à nous envoyer un message.
      </p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Nom complet :</label>
          <input
            type="text"
            id="name"
            className="form-control"
            required
            placeholder="Votre nom"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Adresse courriel :</label>
          <input
            type="email"
            id="email"
            className="form-control"
            required
            placeholder="nom@exemple.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message :</label>
          <textarea
            id="message"
            className="form-control"
            rows={5}
            required
            placeholder="Votre message ici..."
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          />
        </div>

        <button type="submit" className="submit-btn">
          Envoyer le message
        </button>
      </form>
    </div>
  );
}