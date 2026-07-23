import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  // Basculer la classe .dark-mode sur le <body>
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  return (
    <nav style={{ padding: '1rem 2rem', background: 'var(--nav-bg)', color: 'var(--nav-text)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <ul style={{ display: 'flex', gap: '20px', listStyle: 'none' }}>
        <li><Link to="/" style={{ color: 'var(--nav-text)', textDecoration: 'none' }}>Accueil</Link></li>
        <li><Link to="/equipe" style={{ color: 'var(--nav-text)', textDecoration: 'none' }}>Équipe</Link></li>
        <li><Link to="/projets" style={{ color: 'var(--nav-text)', textDecoration: 'none' }}>Projets</Link></li>
        <li><Link to="/contact" style={{ color: 'var(--nav-text)', textDecoration: 'none' }}>Contact</Link></li>
      </ul>

      {/* Bouton d'accessibilité Thème */}
      <button 
        onClick={() => setDarkMode(!darkMode)}
        aria-label="Changer le thème de couleur"
        style={{
          padding: '0.5rem 1rem',
          cursor: 'pointer',
          borderRadius: '20px',
          border: 'none',
          backgroundColor: 'var(--primary-color)',
          color: '#fff',
          fontWeight: 'bold'
        }}
      >
        {darkMode ? '☀️ Mode Clair' : '🌙 Mode Sombre'}
      </button>
    </nav>
  );
}
