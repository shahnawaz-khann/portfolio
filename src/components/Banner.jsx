import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle, Download } from 'react-bootstrap-icons';
import DeskModel from './DeskModel';
// import './PremiumHero.css';
import 'animate.css';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [showCursor, setShowCursor] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  // Banner typewriter states
  const [bannerLoopNum, setBannerLoopNum] = useState(0);
  const [bannerIsDeleting, setBannerIsDeleting] = useState(false);
  const [bannerText, setBannerText] = useState('');
  const [bannerDelta, setBannerDelta] = useState(150 - Math.random() * 50);
  const [bannerShowCursor, setBannerShowCursor] = useState(true);
  
  const toRotate = [ "Full Stack Developer", "MERN Stack Developer", "React Developer" ];
  const bannerToRotate = ["Let's work together", "Available for work!"];
  const period = 2000;
  const bannerPeriod = 1500;

  useEffect(() => {
    setIsVisible(true);
    // Ensure page loads at top with navbar visible
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }, 100);

    // Mobile detection
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Main profile typewriter effect
  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text, delta])

  // Banner typewriter effect
  useEffect(() => {
    let bannerTicker = setInterval(() => {
      bannerTick();
    }, bannerDelta);

    return () => { clearInterval(bannerTicker) };
  }, [bannerText, bannerDelta])

  // Cursor blinking effects
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);

    return () => clearInterval(cursorInterval);
  }, []);

  useEffect(() => {
    const bannerCursorInterval = setInterval(() => {
      setBannerShowCursor(prev => !prev);
    }, 530);

    return () => clearInterval(bannerCursorInterval);
  }, []);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  }

  const bannerTick = () => {
    let i = bannerLoopNum % bannerToRotate.length;
    let fullText = bannerToRotate[i];
    let updatedText = bannerIsDeleting ? fullText.substring(0, bannerText.length - 1) : fullText.substring(0, bannerText.length + 1);

    setBannerText(updatedText);

    if (bannerIsDeleting) {
      setBannerDelta(prevDelta => prevDelta / 4); // Much faster deletion
    }

    if (!bannerIsDeleting && updatedText === fullText) {
      setBannerIsDeleting(true);
      setBannerDelta(bannerPeriod);
    } else if (bannerIsDeleting && updatedText === '') {
      setBannerIsDeleting(false);
      setBannerLoopNum(bannerLoopNum + 1);
      setBannerDelta(250);
    }
  }

  return (
    <section className="premium-banner" id="home">
      {/* Always visible text banner */}
      <div style={{
        position: 'fixed',
        top: isMobile ? '70px' : '100px',
        left: '50%',
        transform: 'translateX(-50%)',
        backgroundColor: 'transparent',
        color: 'white',
        padding: isMobile ? '6px 16px' : '8px 20px',
        borderRadius: '15px',
        fontSize: isMobile ? '12px' : '14px',
        fontWeight: '500',
        zIndex: 1000,
        border: 'none',
        boxShadow: 'none',
        backdropFilter: 'none',
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        maxWidth: isMobile ? '90vw' : 'auto'
      }}>
        <span style={{
          position: 'relative',
          display: 'flex',
          height: '12px',
          width: '12px'
        }}>
          <span style={{
            position: 'absolute',
            display: 'inline-flex',
            height: '100%',
            width: '100%',
            borderRadius: '50%',
            backgroundColor: '#10b981',
            opacity: 0.75,
            animation: 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite'
          }}></span>
          <span style={{
            position: 'relative',
            display: 'inline-flex',
            height: '12px',
            width: '12px',
            borderRadius: '50%',
            backgroundColor: '#10b981'
          }}></span>
        </span>
        <span>
          {bannerText}
          <span style={{
            opacity: bannerShowCursor ? 1 : 0,
            transition: 'opacity 0.1s',
            marginLeft: '2px'
          }}>|</span>
        </span>
      </div>

      <style jsx>{`
        @keyframes ping {
          75%, 100% {
            transform: scale(2);
            opacity: 0;
          }
        }
      `}</style>

      {/* Animated Background Elements - Removed for space background */}

      <Container className="banner-container">
        <Row className="align-items-center min-vh-100">
          <Col xs={12} md={6} xl={7} className="hero-content">
            <div 
              className={`hero-text-wrapper ${isVisible ? 'animate-in' : ''}`}
            >
              <span className="premium-tagline">
                <span className="tagline-icon">✨</span>
                Welcome to my Portfolio
                <span className="tagline-glow"></span>
              </span>
              
              <h1 className="hero-heading">
                <span className="greeting">Hi! I'm </span>
                <span className="name-gradient" style={{ color: '#8b5cf6', fontWeight: 'bold' }}>Shahnawaz Khan </span>
                <span className="role-text" style={{ color: '#10b981' }}>
                  <span className="txt-rotate">
                    <span className="wrap">{text}</span>
                    <span className={`cursor ${showCursor ? 'visible' : 'hidden'}`}>|</span>
                  </span>
                </span>
              </h1>
              
              <p className="hero-description">
                Passionate Full Stack Developer with expertise in building 
                <span className="highlight"> scalable web applications</span> using the MERN stack. I enjoy building modern, scalable websites while continuously exploring new technologies. Alongside web development, I am actively learning Machine Learning and Data Analysis to expand my problem-solving and analytical skills.
              </p>
              
              <div className="hero-buttons">
                <button 
                  onClick={() => {
                    document.getElementById('connect').scrollIntoView({ 
                      behavior: 'smooth' 
                    });
                  }}
                  style={{
                    background: 'transparent',
                    border: '1px solid #ffffff',
                    borderRadius: '0',
                    padding: '12px 30px',
                    color: 'white',
                    fontWeight: '500',
                    fontSize: '16px',
                    cursor: 'pointer',
                    boxShadow: 'none',
                    outline: 'none'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.borderColor = '#cccccc';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.borderColor = '#ffffff';
                  }}
                >
                  <span style={{ background: 'transparent', color: 'white', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <ArrowRightCircle size={20} />
                    Let's Connect
                  </span>
                </button>
                
                <button 
                  onClick={() => {
                    const link = document.createElement('a');
                    link.href = '/Resume.pdf';
                    link.download = 'Shahnawaz_Khan_Resume.pdf';
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                  }}
                  style={{
                    background: 'transparent',
                    border: '1px solid #ffffff',
                    borderRadius: '0',
                    padding: '12px 28px',
                    color: 'white',
                    fontWeight: '500',
                    fontSize: '16px',
                    cursor: 'pointer',
                    marginLeft: '15px',
                    boxShadow: 'none',
                    outline: 'none'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.borderColor = '#cccccc';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.borderColor = '#ffffff';
                  }}
                >
                  <span style={{ background: 'transparent', color: 'white', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <Download size={18} />
                    Download CV
                  </span>
                </button>
              </div>
            </div>
          </Col>
          
          <Col xs={12} md={6} xl={5} className="hero-image-col">
            <div className="profile-3d-model-fullsize" style={{
              minHeight: '400px',
              background: 'transparent',
              position: 'relative',
              marginLeft: '20px',
              paddingLeft: '20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <DeskModel />
            </div>
            <div className="floating-elements">
              <div className="floating-icon icon-1">⚡</div>
              <div className="floating-icon icon-2">🚀</div>
              <div className="floating-icon icon-3">💻</div>
              <div className="floating-icon icon-4">🎯</div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}