import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";
import { FiFileText, FiUser, FiFolder, FiMail, FiMenu, FiX } from "react-icons/fi";
import { useEffect, useState } from 'react';

const ModernNavbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      // More comprehensive mobile detection
      const mobile = window.innerWidth <= 768 || 
                    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      setIsMobile(mobile);
      if (!mobile) {
        setIsMobileMenuOpen(false); // Close mobile menu when switching to desktop
      }
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    window.addEventListener('orientationchange', checkMobile);

    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('orientationchange', checkMobile);
    };
  }, []);

  useEffect(() => {
    // Improved navbar positioning and visibility
    const navbar = document.querySelector('.modern-navbar');
    if (navbar) {
      // Better mobile positioning
      const topPosition = isMobile ? '10px' : '20px';
      
      navbar.style.position = 'fixed';
      navbar.style.top = topPosition;
      navbar.style.left = '50%';
      navbar.style.transform = 'translateX(-50%)';
      navbar.style.zIndex = '1000';
      navbar.style.visibility = 'visible';
      navbar.style.opacity = '1';
      navbar.style.display = 'block';
      navbar.style.maxWidth = isMobile ? '95vw' : 'auto';
      navbar.style.width = isMobile ? '95vw' : 'auto';
    }

    // Prevent scroll listeners from interfering
    const handleScroll = () => {
      if (navbar) {
        const topPosition = isMobile ? '10px' : '20px';
        navbar.style.position = 'fixed';
        navbar.style.top = topPosition;
        navbar.style.visibility = 'visible';
        navbar.style.opacity = '1';
        navbar.style.display = 'block';
        navbar.style.zIndex = '1000';
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isMobile]);

  const toggleMobileMenu = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = (e) => {
    if (e) {
      e.preventDefault();
    }
    setIsMobileMenuOpen(false);
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMobileMenuOpen && !event.target.closest('.modern-navbar')) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('touchstart', handleClickOutside);
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('touchstart', handleClickOutside);
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  const navbarStyle = {
    position: 'fixed',
    top: isMobile ? '10px' : '20px',
    left: '50%',
    transform: 'translateX(-50%)',
    zIndex: '1000',
    background: 'rgba(0, 0, 0, 0.95)',
    backdropFilter: 'blur(20px)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    borderRadius: isMobile ? '16px' : '25px',
    visibility: 'visible',
    opacity: '1',
    display: 'block',
    padding: isMobile ? '10px 14px' : '12px 20px',
    margin: '0',
    width: isMobile ? '95vw' : 'auto',
    maxWidth: isMobile ? '400px' : 'none',
    minWidth: isMobile ? '300px' : 'auto',
    boxShadow: isMobile ? '0 8px 32px rgba(0, 0, 0, 0.3)' : '0 4px 20px rgba(0, 0, 0, 0.2)'
  };

  const containerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: isMobile ? 'space-between' : 'center',
    gap: isMobile ? '8px' : '24px',
    visibility: 'visible',
    opacity: '1',
    padding: '0',
    margin: '0',
    width: '100%'
  };

  if (isMobile) {
    return (
      <nav className="modern-navbar" style={navbarStyle}>
        <div className="navbar-container" style={containerStyle}>
          {!isMobileMenuOpen ? (
            /* Mobile Header Row - Collapsed State */
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'space-between',
              width: '100%'
            }}>
              {/* Social Icons - Always visible on mobile */}
              <div className="social-icons" style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '8px',
                flex: '1'
              }}>
                <IconButton 
                  icon={<FaLinkedinIn />} 
                  href="https://linkedin.com/in/shahnawaz-khann/" 
                  ariaLabel="LinkedIn"
                  mobile={true}
                />
                <IconButton 
                  icon={<FaGithub />} 
                  href="https://github.com/shahnawaz-khann/" 
                  ariaLabel="GitHub"
                  mobile={true}
                />
                <IconButton 
                  icon={<FaInstagram />} 
                  href="https://www.instagram.com/shahnawaz-khann" 
                  ariaLabel="Instagram"
                  mobile={true}
                />
              </div>
              
              {/* Mobile Menu Toggle */}
              <button
                onClick={toggleMobileMenu}
                onTouchStart={(e) => e.stopPropagation()}
                style={{
                  background: 'transparent',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  borderRadius: '8px',
                  color: 'rgba(255, 255, 255, 0.9)',
                  padding: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '20px',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  minWidth: '44px',
                  minHeight: '44px',
                  WebkitTapHighlightColor: 'transparent',
                  touchAction: 'manipulation'
                }}
                aria-label="Toggle navigation menu"
                aria-expanded={isMobileMenuOpen}
                onMouseEnter={(e) => {
                  e.target.style.borderColor = 'rgba(255, 255, 255, 0.5)';
                  e.target.style.background = 'rgba(255, 255, 255, 0.05)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                  e.target.style.background = 'transparent';
                }}
              >
                <FiMenu />
              </button>
            </div>
          ) : (
            /* Mobile Menu - Expanded State */
            <div style={{ width: '100%' }}>
              {/* Top Row with Social Icons and Close Button */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '12px'
              }}>
                {/* Social Icons - Keep visible when expanded */}
                <div className="social-icons" style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '8px',
                  flex: '1'
                }}>
                  <IconButton 
                    icon={<FaLinkedinIn />} 
                    href="https://linkedin.com/in/shahnawaz-khann/" 
                    ariaLabel="LinkedIn"
                    mobile={true}
                  />
                  <IconButton 
                    icon={<FaGithub />} 
                    href="https://github.com/shahnawaz-khann/" 
                    ariaLabel="GitHub"
                    mobile={true}
                  />
                  <IconButton 
                    icon={<FaInstagram />} 
                    href="https://www.instagram.com/shahnawaz-khann" 
                    ariaLabel="Instagram"
                    mobile={true}
                  />
                </div>
                
                {/* Close Button */}
                <button
                  onClick={toggleMobileMenu}
                  onTouchStart={(e) => e.stopPropagation()}
                  style={{
                    background: 'transparent',
                    border: '1px solid rgba(255, 255, 255, 0.3)',
                    borderRadius: '8px',
                    color: 'rgba(255, 255, 255, 0.9)',
                    padding: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '20px',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    minWidth: '44px',
                    minHeight: '44px',
                    WebkitTapHighlightColor: 'transparent',
                    touchAction: 'manipulation'
                  }}
                  aria-label="Close navigation menu"
                  onMouseEnter={(e) => {
                    e.target.style.borderColor = 'rgba(255, 255, 255, 0.5)';
                    e.target.style.background = 'rgba(255, 255, 255, 0.05)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                    e.target.style.background = 'transparent';
                  }}
                >
                  <FiX />
                </button>
              </div>
              
              {/* Navigation Items */}
              <div 
                className="mobile-menu-dropdown"
                style={{ 
                  width: '100%', 
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '6px',
                  animation: 'slideDown 0.3s ease-out',
                  maxHeight: '300px',
                  overflowY: 'auto'
                }}
              >
                <NavButton 
                  icon={<FiFileText />} 
                  text="Resume" 
                  href="/Resume.pdf"
                  download="Shahnawaz_Khan_Resume.pdf"
                  mobile={true}
                  onClick={closeMobileMenu}
                />
                <NavButton 
                  icon={<FiUser />} 
                  text="About" 
                  href="#intro"
                  mobile={true}
                  onClick={closeMobileMenu}
                />
                <NavButton 
                  icon={<FiFolder />} 
                  text="Projects" 
                  href="#projects"
                  mobile={true}
                  onClick={closeMobileMenu}
                />
                <NavButton 
                  icon={<FiMail />} 
                  text="Contact" 
                  href="#connect"
                  mobile={true}
                  onClick={closeMobileMenu}
                />
              </div>
            </div>
          )}
        </div>
        
        <style jsx>{`
          @keyframes slideDown {
            from {
              opacity: 0;
              transform: translateY(-10px);
              max-height: 0;
            }
            to {
              opacity: 1;
              transform: translateY(0);
              max-height: 300px;
            }
          }
          
          .mobile-menu-dropdown {
            animation: slideDown 0.3s ease-out;
          }
          
          /* Ensure proper touch handling on mobile */
          @media (max-width: 768px) {
            .modern-navbar * {
              -webkit-tap-highlight-color: transparent;
              touch-action: manipulation;
            }
          }
        `}</style>
      </nav>
    );
  }

  // Desktop navbar
  return (
    <nav className="modern-navbar" style={navbarStyle}>
      <div className="navbar-container" style={containerStyle}>
        {/* Social Icons */}
        <div className="social-icons" style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '12px', 
          padding: '0', 
          margin: '0' 
        }}>
          <IconButton 
            icon={<FaLinkedinIn />} 
            href="https://linkedin.com/in/shahnawaz-khann/" 
            ariaLabel="LinkedIn"
          />
          <IconButton 
            icon={<FaGithub />} 
            href="https://github.com/shahnawaz-khann/" 
            ariaLabel="GitHub"
          />
          <IconButton 
            icon={<FaInstagram />} 
            href="https://www.instagram.com/shahnawaz-khann" 
            ariaLabel="Instagram"
          />
        </div>
        
        {/* Divider */}
        <div className="divider" style={{
          width: '1px',
          height: '28px',
          background: 'rgba(255, 255, 255, 0.2)',
          margin: '0'
        }}></div>
        
        {/* Navigation Links */}
        <div className="nav-links" style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '10px', 
          padding: '0', 
          margin: '0' 
        }}>
          <NavButton 
            icon={<FiFileText />} 
            text="Resume" 
            href="/Resume.pdf"
            download="Shahnawaz_Khan_Resume.pdf"
          />
          <NavButton 
            icon={<FiUser />} 
            text="About" 
            href="#intro"
          />
          <NavButton 
            icon={<FiFolder />} 
            text="Projects" 
            href="#projects"
          />
          <NavButton 
            icon={<FiMail />} 
            text="Contact" 
            href="#connect"
          />
        </div>
      </div>
    </nav>
  );
};

const IconButton = ({ icon, href, ariaLabel, mobile = false }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={ariaLabel}
    className="icon-btn"
    style={{
      width: mobile ? '40px' : '40px',
      height: mobile ? '40px' : '40px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'transparent',
      border: '1px solid rgba(255, 255, 255, 0.2)',
      borderRadius: mobile ? '8px' : '8px',
      color: 'rgba(255, 255, 255, 0.8)',
      fontSize: mobile ? '16px' : '16px',
      textDecoration: 'none',
      padding: '0',
      margin: '0',
      transition: 'all 0.2s ease',
      WebkitTapHighlightColor: 'transparent',
      touchAction: 'manipulation'
    }}
    onMouseEnter={(e) => {
      e.target.style.background = 'rgba(255, 255, 255, 0.05)';
      e.target.style.color = '#ffffff';
      e.target.style.borderColor = 'rgba(255, 255, 255, 0.4)';
      e.target.style.transform = 'scale(1.05)';
    }}
    onMouseLeave={(e) => {
      e.target.style.background = 'transparent';
      e.target.style.color = 'rgba(255, 255, 255, 0.8)';
      e.target.style.borderColor = 'rgba(255, 255, 255, 0.2)';
      e.target.style.transform = 'scale(1)';
    }}
  >
    {icon}
  </a>
);

const NavButton = ({ icon, text, href, download, mobile = false, onClick }) => {
  const handleClick = (e) => {
    if (onClick) {
      // Small delay to allow navigation to complete before closing menu
      setTimeout(() => onClick(e), 100);
    }
  };

  return (
    <a 
      href={href} 
      className="nav-btn"
      download={download}
      onClick={handleClick}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: mobile ? '10px' : '8px',
        padding: mobile ? '12px 14px' : '10px 16px',
        height: mobile ? '44px' : '40px',
        background: 'transparent',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        borderRadius: mobile ? '10px' : '8px',
        color: 'rgba(255, 255, 255, 0.8)',
        fontSize: mobile ? '14px' : '13px',
        fontWeight: '500',
        textDecoration: 'none',
        whiteSpace: 'nowrap',
        margin: '0',
        width: mobile ? '100%' : 'auto',
        justifyContent: mobile ? 'flex-start' : 'center',
        transition: 'all 0.2s ease',
        minHeight: mobile ? '44px' : '40px',
        WebkitTapHighlightColor: 'transparent',
        touchAction: 'manipulation'
      }}
      onMouseEnter={(e) => {
        e.target.style.background = 'rgba(255, 255, 255, 0.08)';
        e.target.style.color = '#ffffff';
        e.target.style.borderColor = 'rgba(255, 255, 255, 0.4)';
        e.target.style.transform = mobile ? 'translateX(4px)' : 'translateY(-2px)';
      }}
      onMouseLeave={(e) => {
        e.target.style.background = 'transparent';
        e.target.style.color = 'rgba(255, 255, 255, 0.8)';
        e.target.style.borderColor = 'rgba(255, 255, 255, 0.2)';
        e.target.style.transform = 'translate(0)';
      }}
    >
      <span className="nav-icon" style={{ 
        fontSize: mobile ? '16px' : '14px', 
        display: 'flex', 
        alignItems: 'center' 
      }}>
        {icon}
      </span>
      <span className="nav-text" style={{ 
        fontWeight: '500', 
        letterSpacing: '0.01em' 
      }}>
        {text}
      </span>
    </a>
  );
};

export default ModernNavbar;