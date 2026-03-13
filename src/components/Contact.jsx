import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import './Skills.css';
import 'animate.css';

export const Contact = () => {
  
  // Contact email configuration
  const CONTACT_EMAIL = "contact.shahnawazX@gmail.com";
  
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  }
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});
  const [errors, setErrors] = useState({});

  // Email regex pattern for validation
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const onFormUpdate = (category, value) => {
      setFormDetails({
        ...formDetails,
        [category]: value
      });
      
      // Clear error when user starts typing
      if (errors[category]) {
        setErrors({
          ...errors,
          [category]: ''
        });
      }
  }

  const validateForm = () => {
    const newErrors = {};

    // Check required fields
    if (!formDetails.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }
    
    if (!formDetails.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }
    
    if (!formDetails.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formDetails.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formDetails.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }
    
    if (!formDetails.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate form before submission
    if (!validateForm()) {
      setStatus({ success: false, message: 'Please fill in all required fields correctly.' });
      return;
    }

    setButtonText("Sending...");
    
    // Simulate form submission
    setTimeout(() => {
      setButtonText("Send");
      setFormDetails(formInitialDetails);
      setErrors({});
      setStatus({ success: true, message: 'Message sent successfully! I will get back to you soon.'});
      
      // Clear status after 5 seconds
      setTimeout(() => {
        setStatus({});
      }, 5000);
    }, 1000);
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <div className="contact-header">
          <h2 className="contact-title">Get In Touch</h2>
          <p className="contact-description">
            Ready to bring your ideas to life? Let's connect and discuss how we can work together to create something amazing.
          </p>
          
          {/* Direct Contact Information */}
          <div className="direct-contact">
            <div className="email-contact">
              <h3>Direct Contact</h3>
              <a href={`mailto:${CONTACT_EMAIL}`} className="email-link">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                {CONTACT_EMAIL}
              </a>
              <p className="email-description">Feel free to reach out directly for quick questions or collaborations</p>
            </div>
          </div>
        </div>
        
        <Row className="align-items-center justify-content-center">
          <Col size={12} md={8} lg={6}>
            <div className="animate__animated animate__fadeIn">
              <form onSubmit={handleSubmit}>
                <Row>
                  <Col size={12} sm={6} className="px-1">
                    <input 
                      type="text" 
                      value={formDetails.firstName} 
                      placeholder="First Name *" 
                      onChange={(e) => onFormUpdate('firstName', e.target.value)}
                      className={errors.firstName ? 'error' : ''}
                      required
                    />
                    {errors.firstName && <span className="error-message">{errors.firstName}</span>}
                  </Col>
                  <Col size={12} sm={6} className="px-1">
                    <input 
                      type="text" 
                      value={formDetails.lastName} 
                      placeholder="Last Name *" 
                      onChange={(e) => onFormUpdate('lastName', e.target.value)}
                      className={errors.lastName ? 'error' : ''}
                      required
                    />
                    {errors.lastName && <span className="error-message">{errors.lastName}</span>}
                  </Col>
                  <Col size={12} sm={6} className="px-1">
                    <input 
                      type="email" 
                      value={formDetails.email} 
                      placeholder="Email Address *" 
                      onChange={(e) => onFormUpdate('email', e.target.value)}
                      className={errors.email ? 'error' : ''}
                      required
                    />
                    {errors.email && <span className="error-message">{errors.email}</span>}
                  </Col>
                  <Col size={12} sm={6} className="px-1">
                    <input 
                      type="tel" 
                      value={formDetails.phone} 
                      placeholder="Phone No. *" 
                      onChange={(e) => onFormUpdate('phone', e.target.value)}
                      className={errors.phone ? 'error' : ''}
                      required
                    />
                    {errors.phone && <span className="error-message">{errors.phone}</span>}
                  </Col>
                  <Col size={12} className="px-1">
                    <textarea 
                      rows="6" 
                      value={formDetails.message} 
                      placeholder="Message *" 
                      onChange={(e) => onFormUpdate('message', e.target.value)}
                      className={errors.message ? 'error' : ''}
                      required
                    ></textarea>
                    {errors.message && <span className="error-message">{errors.message}</span>}
                  </Col>
                  <Col size={12} className="px-1 text-center">
                    <button type="submit"><span>{buttonText}</span></button>
                  </Col>
                  {
                    status.message &&
                    <Col>
                      <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                    </Col>
                  }
                </Row>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}