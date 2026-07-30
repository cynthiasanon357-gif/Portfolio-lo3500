import { useState } from 'react';
import '../components/Cards.css';

export default function Projects() {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const projectsList = [
    {
      title: 'Atlas Mondial Interactif',
      description: 'Application interactive permettant d\'explorer les pays du monde, de visualiser des données géographiques et démographiques en temps réel via une carte dynamique.',
      tags: ['React', 'Leaflet', 'API REST', 'CSS3'],
      githubLink: 'https://github.com/Danaika21/Devoir2_LOG3500/tree/main',
      demoLink: '#'
    },
    {
      title: 'Application Météo Interactive',
      description: 'Une application web dynamique permettant de consulter les prévisions météorologiques en temps réel avec une interface fluide et responsive.',
      tags: ['React', 'JavaScript', 'CSS3', 'API REST'],
      githubLink: 'https://github.com/cynthiasanon357-gif/weather-dashbord',
      demoLink: '#'
    },
    {
      title: 'Gestion de Files d\'Attente Bancaire',
      description: 'Interface modernisée pour un système intelligent de gestion de files d\'attente bancaires, visant à optimiser l\'expérience client et la gestion des flux.',
      tags: ['React', 'TypeScript', 'UI/UX Design', 'Tailwind'],
      githubLink: 'https://github.com/Pa-Gen-Kanpe/NO_WAIT',
      demoLink: '#'
    },
    {
      title: 'Formulaire d\'Inscription',
      description: 'Composant de formulaire complet avec validation des champs en temps réel, gestion des erreurs d\'authentification et design ergonomique.',
      tags: ['React', 'TypeScript', 'Validation Form', 'CSS Modules'],
      githubLink: 'https://github.com/cynthiasanon357-gif/devoir-html-css',
      demoLink: '#'
    }
  ];

  // Filtrage des projets en fonction du tag sélectionné
  const filteredProjects = selectedTag
    ? projectsList.filter(project => project.tags.includes(selectedTag))
    : projectsList;

  return (
    <div className="page-container">
      <h1 className="section-title">Nos Projets</h1>
      <p style={{ marginBottom: '1.5rem' }}>
        Découvrez les réalisations et projets techniques développés par notre équipe.
      </p>

      {/* Message / Bouton pour réinitialiser le filtre */}
      {selectedTag && (
        <div style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <span>Filtré par la technologie : <strong>{selectedTag}</strong></span>
          <button 
            onClick={() => setSelectedTag(null)}
            style={{
              padding: '0.3rem 0.8rem',
              borderRadius: '6px',
              border: 'none',
              backgroundColor: 'var(--primary-color)',
              color: '#fff',
              cursor: 'pointer',
              fontSize: '0.85rem'
            }}
          >
            Afficher tous les projets
          </button>
        </div>
      )}

      <div className="cards-grid">
        {filteredProjects.map((project, index) => (
          <div key={index} className="custom-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <h2 className="card-title" style={{ marginTop: 0 }}>{project.title}</h2>
              <p className="card-text">{project.description}</p>
            </div>

            <div>
              {/* Tags des technologies interactifs */}
              <div className="tag-container" style={{ marginBottom: '1.2rem' }}>
                {project.tags.map((tag, i) => (
                  <span 
                    key={i} 
                    className="tag"
                    onClick={() => setSelectedTag(tag)}
                    style={{ 
                      cursor: 'pointer',
                      border: selectedTag === tag ? '2px solid var(--primary-color)' : 'none'
                    }}
                    title={`Cliquer pour filtrer par ${tag}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Liens (GitHub & Démo) */}
              <div style={{ display: 'flex', gap: '0.8rem' }}>
                {project.githubLink && (
                  <a 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn-link"
                    style={{
                      padding: '0.4rem 0.8rem',
                      borderRadius: '6px',
                      backgroundColor: 'var(--card-border)',
                      color: 'var(--text-color)',
                      textDecoration: 'none',
                      fontSize: '0.85rem',
                      fontWeight: 500
                    }}
                  >
                    Code GitHub ↗
                  </a>
                )}
                {project.demoLink && project.demoLink !== '#' && (
                  <a 
                    href={project.demoLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn-link"
                    style={{
                      padding: '0.4rem 0.8rem',
                      borderRadius: '6px',
                      backgroundColor: 'var(--primary-color)',
                      color: '#ffffff',
                      textDecoration: 'none',
                      fontSize: '0.85rem',
                      fontWeight: 500
                    }}
                  >
                    Voir Démo ↗
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}