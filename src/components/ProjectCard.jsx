import { Eye, Github } from 'react-bootstrap-icons';

export const ProjectCard = ({ title, description, technologies, demoUrl, githubUrl }) => {
  return (
    <div className="project-card">
      <div className="proj-imgbx">
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          {technologies && (
            <div style={{marginTop: '10px', marginBottom: '15px'}}>
              {technologies.slice(0, 3).map((tech, index) => (
                <span key={index} style={{
                  display: 'inline-block',
                  background: 'rgba(255,255,255,0.2)',
                  padding: '2px 8px',
                  margin: '2px',
                  borderRadius: '10px',
                  fontSize: '10px'
                }}>
                  {tech}
                </span>
              ))}
              {technologies.length > 3 && (
                <span style={{
                  display: 'inline-block',
                  background: 'rgba(255,255,255,0.1)',
                  padding: '2px 8px',
                  margin: '2px',
                  borderRadius: '10px',
                  fontSize: '10px'
                }}>
                  +{technologies.length - 3} more
                </span>
              )}
            </div>
          )}
          <div style={{
            display: 'flex',
            gap: '10px',
            justifyContent: 'center',
            marginTop: 'auto'
          }}>
            {demoUrl && (
              <a 
                href={demoUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                style={{
                  background: 'rgba(170, 54, 124, 0.8)',
                  color: 'white',
                  padding: '8px 16px',
                  borderRadius: '20px',
                  textDecoration: 'none',
                  fontSize: '12px',
                  fontWeight: '600',
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px'
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = 'rgba(170, 54, 124, 1)';
                  e.target.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'rgba(170, 54, 124, 0.8)';
                  e.target.style.transform = 'translateY(0)';
                }}
              >
                <Eye size={14} />
                Take a look
              </a>
            )}
            {githubUrl && (
              <a 
                href={githubUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                style={{
                  background: 'rgba(74, 47, 189, 0.8)',
                  color: 'white',
                  padding: '8px 16px',
                  borderRadius: '20px',
                  textDecoration: 'none',
                  fontSize: '12px',
                  fontWeight: '600',
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px'
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = 'rgba(74, 47, 189, 1)';
                  e.target.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'rgba(74, 47, 189, 0.8)';
                  e.target.style.transform = 'translateY(0)';
                }}
              >
                <Github size={14} />
                Code
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}