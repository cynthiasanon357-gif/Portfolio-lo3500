import { useState } from 'react';
import '../components/Cards.css';
import '../components/Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Merci ${formData.name}, votre message a bien été envoyé !`);
    setFormData({ name: '', email: '', message: '' });
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