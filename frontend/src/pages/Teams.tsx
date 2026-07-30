import './Teams.css';
import photoCynthia from '../assets/Cynthia.jpeg';
import photoDahina from '../assets/Dahina.jpeg';
import photoDanaika from '../assets/Danaika.jpeg';
import photoBilly from '../assets/Billy.jpeg';

export default function Teams() {
  const members = [
    {
      name: 'Cynthia SANON',
      role: 'UI/UX & CSS Specialist',
      skills: ['CSS3', 'Flexbox', 'Accessibility'],
      image: photoCynthia
    },
    {
      name: 'Dahina ISIDORE',
      role: 'Frontend & React Developer',
      skills: ['React', 'TypeScript', 'React Router'],
      image: photoDahina
    },
    {
      name: 'Danaika Claude MICHEL',
      role: 'Backend & DevOps Lead',
      skills: ['Node.js', 'Express', 'Railway'],
      image: photoDanaika
    },
    {
      name: 'Max Billy LAURANE',
      role: 'State Management & API Lead',
      skills: ['Context API', 'Fetch', 'GitHub API'],
      image: photoBilly
    }
  ];

  return (
    <section className="team-container">
      <h2 className="team-title">
        Notre Équipe
      </h2>
      <p className="team-subtitle">
        Découvrez les membres et les compétences clés de notre équipe de développement.
      </p>

      <div className="team-grid">
        {members.map((member, index) => (
          <article key={index} className="team-card">
            <div className="team-card-header">
              <img 
                src={member.image} 
                alt={`Photo de profil de ${member.name}`} 
                className="team-avatar"
              />
              <div>
                <h3 className="team-member-name">{member.name}</h3>
                <p className="team-member-role">{member.role}</p>
              </div>
            </div>

            <div className="team-skills-list">
              {member.skills.map((skill, i) => (
                <span key={i} className="team-skill-badge">
                  {skill}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}