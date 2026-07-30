import { useState, useEffect } from 'react';

export default function ProjectCard() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  // Utilisation de useEffect pour la récupération asynchrone depuis l'API GitHub
  useEffect(() => {
    fetch('https://api.github.com/users/Danaika21/repos')
      .then((response) => response.json())
      .then((data) => {
        setRepos(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des repos:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p style={{ padding: '2rem', textAlign: 'center' }}>Chargement des projets GitHub...</p>;
  }

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Nos Projets GitHub </h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem', marginTop: '1rem' }}>
        {repos.map((repo: any) => (
          <div key={repo.id} style={{ border: '1px solid #ccc', padding: '1rem', borderRadius: '8px', background: 'var(--card-bg, #fff)' }}>
            <h3>{repo.name}</h3>
            <p>{repo.description || "Pas de description disponible."}</p>
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer" style={{ color: '#0066cc', textDecoration: 'underline' }}>
              Voir sur GitHub
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}