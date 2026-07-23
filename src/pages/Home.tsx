import { Link } from 'react-router-dom';
import '../components/Cards.css';

export default function Home() {
  return (
    <div className="page-container" style={{ textAlign: 'center', padding: '3rem 1rem' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'var(--primary-color)' }}>
        Bienvenue sur notre Portfolio Collaboratif
      </h1>
      
      <p style={{ fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto 2rem auto', color: 'var(--text-color)' }}>
        Projet développé dans le cadre du cours <strong>LOG3500</strong>. Ce site vitrine présente notre équipe, 
        nos projets techniques et nos réalisations réseau & développement.
      </p>

      <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
        <Link 
          to="/equipe" 
          style={{
            padding: '0.8rem 1.5rem',
            backgroundColor: 'var(--primary-color)',
            color: '#ffffff',
            borderRadius: '8px',
            textDecoration: 'none',
            fontWeight: 'bold'
          }}
        >
          Découvrir l'équipe
        </Link>
        
        <Link 
          to="/projets" 
          style={{
            padding: '0.8rem 1.5rem',
            border: '2px solid var(--primary-color)',
            color: 'var(--primary-color)',
            borderRadius: '8px',
            textDecoration: 'none',
            fontWeight: 'bold'
          }}
        >
          Voir nos projets
        </Link>
      </div>
    </div>
  );
}