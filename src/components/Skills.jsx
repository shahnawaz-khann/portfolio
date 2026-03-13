import { useState, useEffect } from 'react';
import { Container } from "react-bootstrap";
import { 
  FaCode, FaDatabase, FaServer, FaCloud, FaTools,
  FaPalette, FaRocket, FaCube, FaLayerGroup, FaAtom,
  FaBolt, FaGem, FaCogs, FaShapes, FaProjectDiagram,
  FaNetworkWired, FaCodeBranch, FaBox, FaMagic
} from 'react-icons/fa';
import SkillsModel from './SkillsModel';
import './Skills.css';

export const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.querySelector('.skills-section');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  const skills = [
    { 
      name: "JavaScript", 
      icon: FaBolt, 
      color: "#F7DF1E",
      colorRgb: "247, 223, 30",
      description: "Dynamic programming language for web development, enabling interactive user interfaces and server-side applications."
    },
    { 
      name: "React", 
      icon: FaAtom, 
      color: "#61DAFB",
      colorRgb: "97, 218, 251",
      description: "Popular JavaScript library for building user interfaces with component-based architecture and virtual DOM."
    },
    { 
      name: "Node.js", 
      icon: FaServer, 
      color: "#339933",
      colorRgb: "51, 153, 51",
      description: "JavaScript runtime for server-side development, enabling full-stack JavaScript applications with high performance."
    },
    { 
      name: "MongoDB", 
      icon: FaLayerGroup, 
      color: "#47A248",
      colorRgb: "71, 162, 72",
      description: "NoSQL document database that provides high performance, high availability, and easy scalability for modern applications."
    },
    { 
      name: "Express.js", 
      icon: FaNetworkWired, 
      color: "#68A063",
      colorRgb: "104, 160, 99",
      description: "Fast, unopinionated web framework for Node.js, perfect for building APIs and web applications quickly."
    },
    { 
      name: "TypeScript", 
      icon: FaCode, 
      color: "#3178C6",
      colorRgb: "49, 120, 198",
      description: "Strongly typed programming language that builds on JavaScript, adding static type definitions for better development."
    },
    { 
      name: "Java", 
      icon: FaCube, 
      color: "#ED8B00",
      colorRgb: "237, 139, 0",
      description: "Object-oriented programming language known for its portability, security, and robustness in enterprise applications."
    },
    { 
      name: "Python", 
      icon: FaGem, 
      color: "#3776AB",
      colorRgb: "55, 118, 171",
      description: "Versatile programming language excellent for web development, data science, automation, and machine learning."
    },
    { 
      name: "C++", 
      icon: FaCogs, 
      color: "#00599C",
      colorRgb: "0, 89, 156",
      description: "High-performance programming language used for system programming, game development, and performance-critical applications."
    },
    { 
      name: "MySQL", 
      icon: FaDatabase, 
      color: "#4479A1",
      colorRgb: "68, 121, 161",
      description: "Reliable relational database management system widely used for web applications and data storage solutions."
    },
    { 
      name: "HTML5", 
      icon: FaShapes, 
      color: "#E34F26",
      colorRgb: "227, 79, 38",
      description: "Latest version of HTML markup language, providing semantic elements and multimedia support for modern web development."
    },
    { 
      name: "CSS3", 
      icon: FaPalette, 
      color: "#1572B6",
      colorRgb: "21, 114, 182",
      description: "Advanced styling language with animations, transitions, and responsive design capabilities for beautiful web interfaces."
    },
    { 
      name: "Git", 
      icon: FaCodeBranch, 
      color: "#F05032",
      colorRgb: "240, 80, 50",
      description: "Distributed version control system for tracking changes in source code and collaborating with development teams."
    },
    { 
      name: "AWS", 
      icon: FaCloud, 
      color: "#FF9900",
      colorRgb: "255, 153, 0",
      description: "Comprehensive cloud computing platform offering scalable infrastructure, storage, and computing services worldwide."
    },
    { 
      name: "Docker", 
      icon: FaBox, 
      color: "#2496ED",
      colorRgb: "36, 150, 237",
      description: "Containerization platform that packages applications with their dependencies for consistent deployment across environments."
    },
    { 
      name: "Redux", 
      icon: FaProjectDiagram, 
      color: "#764ABC",
      colorRgb: "118, 74, 188",
      description: "Predictable state container for JavaScript apps, managing application state in a centralized and predictable way."
    },
    { 
      name: "Next.js", 
      icon: FaRocket, 
      color: "#FFFFFF",
      colorRgb: "255, 255, 255",
      description: "React framework with server-side rendering, static site generation, and built-in optimizations for production applications."
    },
    { 
      name: "PostgreSQL", 
      icon: FaLayerGroup, 
      color: "#336791",
      colorRgb: "51, 103, 145",
      description: "Advanced open-source relational database with strong ACID compliance and support for complex data types."
    },
    { 
      name: "Tailwind CSS", 
      icon: FaMagic, 
      color: "#06B6D4",
      colorRgb: "6, 182, 212",
      description: "Utility-first CSS framework for rapidly building custom user interfaces with pre-built classes and responsive design."
    }
  ];

  return (
    <section className={`skills-section ${isVisible ? 'animate-in' : ''}`} id="skills">
      <Container>
        <div className="skills-header">
          <h2 className="skills-title">Skills & Technologies</h2>
          <p className="skills-description">
            Technologies I work with to build amazing digital experiences
          </p>
        </div>
        
        <div className="skills-content">
          {/* Left Side - Skill Description */}
          <div className="skills-info">
            <div className="skill-description-container">
              {hoveredSkill !== null ? (
                <div className="skill-description active">
                  <h3 className="skill-description-title" style={{ color: skills[hoveredSkill].color }}>
                    {skills[hoveredSkill].name}
                  </h3>
                  <p className="skill-description-text">
                    {skills[hoveredSkill].description}
                  </p>
                </div>
              ) : (
                <div className="skill-description default">
                  <h3 className="skill-description-title">
                    Hover over a skill
                  </h3>
                  <p className="skill-description-text">
                    Explore my technical expertise by hovering over any technology icon to learn more about my experience and how I use it in development.
                  </p>
                </div>
              )}
            </div>
            
            {/* 3D Desk Model */}
            <div className="desk-model-container">
              <SkillsModel />
            </div>
          </div>

          {/* Right Side - Skills Grid */}
          <div className="skills-grid-container">
            <div className="skills-grid">
              {skills.map((skill, index) => {
                const IconComponent = skill.icon;
                return (
                  <div
                    key={skill.name}
                    className={`skill-card ${hoveredSkill === index ? 'hovered' : ''}`}
                    onMouseEnter={() => setHoveredSkill(index)}
                    onMouseLeave={() => setHoveredSkill(null)}
                    style={{
                      '--skill-color': skill.color,
                      '--skill-color-rgb': skill.colorRgb,
                      animationDelay: `${index * 0.05}s`
                    }}
                  >
                    <div className="skill-icon">
                      <IconComponent />
                    </div>
                    <div className="skill-name">
                      {skill.name}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};