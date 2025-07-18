import React from 'react';

const ContactUs = () => {
  return (
    <section
      id="contact" // <--- Added ID here for scroll target
      style={{
        padding: '80px 20px',
        fontFamily: "'Helvetica Neue', Arial, sans-serif",
        background: 'linear-gradient(to right, #f9f9f9 50%, #ffffff 50%)',
        color: '#333'
      }}
    >
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '60px'
      }}>
        {/* Left Column - Contact Info */}
        <div style={{ padding: '40px 0' }}>
          <h1 style={{
            fontSize: '2.8rem',
            fontWeight: 300,
            letterSpacing: '1px',
            marginBottom: '40px',
            textTransform: 'uppercase'
          }}>CONTACT</h1>
          
          <p style={{
            fontSize: '1.1rem',
            lineHeight: '1.6',
            marginBottom: '50px',
            maxWidth: '400px'
          }}>
            For any inquiries, collaborations, or just to say hello, we'd love to hear from you! 
            Reach out, and let's connect.
          </p>
          
          <div style={{ marginBottom: '40px' }}>
            <h3 style={{
              fontSize: '1rem',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '1px',
              marginBottom: '20px',
              color: '#4a6cf7'
            }}>PRESS</h3>
            <p style={{ marginBottom: '8px', fontWeight: 500 }}>SAMSUNG CAT CORPORATION (MILAN OFFICE)</p>
            <p style={{ marginBottom: '8px', fontStyle: 'italic' }}>Centro Direzionale Milan, Strada 2</p>
            <p style={{ marginBottom: '8px' }}>JUUN3 PR</p>
            <p>JUUN1.PR@Samsung.com</p>
          </div>
          
          <div style={{ marginBottom: '40px' }}>
            <h3 style={{
              fontSize: '1rem',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '1px',
              marginBottom: '20px',
              color: '#4a6cf7'
            }}>SALES</h3>
            <p style={{ marginBottom: '8px', fontWeight: 500 }}>JUUN.1 SHOWROOM</p>
            <p>showroom.hi@samsung.com</p>
          </div>
          
          <div>
            <h3 style={{
              fontSize: '1rem',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '1px',
              marginBottom: '20px',
              color: '#4a6cf7'
            }}>HEAD OFFICE</h3>
            <p style={{ marginBottom: '8px', fontWeight: 500 }}>JUUN.1 SAMSUNG CAT CORPORATION</p>
            <p>Republic of Korea</p>
          </div>
        </div>
        
        {/* Right Column - Contact Form */}
        <div style={{
          background: '#ffffff',
          padding: '60px',
          boxShadow: '0 10px 30px rgba(0,0,0,0.05)'
        }}>
          <h2 style={{
            fontSize: '1.8rem',
            fontWeight: 600,
            marginBottom: '30px',
            color: '#1b3a57'
          }}>GET IN TOUCH</h2>
          
          <form style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '25px'
          }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '20px'
            }}>
              <div>
                <label style={{
                  display: 'block',
                  marginBottom: '8px',
                  fontWeight: '500',
                  fontSize: '0.9rem'
                }}>NAME</label>
                <input 
                  type="text" 
                  placeholder="Enter your name*" 
                  style={{
                    width: '100%',
                    padding: '14px',
                    borderRadius: '6px',
                    border: '1px solid #e0e0e0',
                    fontSize: '0.95rem',
                    transition: 'border 0.3s ease',
                    outline: 'none'
                  }}
                />
              </div>
              <div>
                <label style={{
                  display: 'block',
                  marginBottom: '8px',
                  fontWeight: '500',
                  fontSize: '0.9rem'
                }}>EMAIL</label>
                <input 
                  type="email" 
                  placeholder="Enter your email*" 
                  style={{
                    width: '100%',
                    padding: '14px',
                    borderRadius: '6px',
                    border: '1px solid #e0e0e0',
                    fontSize: '0.95rem',
                    transition: 'border 0.3s ease',
                    outline: 'none'
                  }}
                />
              </div>
            </div>
            
            <div>
              <label style={{
                display: 'block',
                marginBottom: '8px',
                fontWeight: '500',
                fontSize: '0.9rem'
              }}>PHONE NUMBER</label>
              <input 
                type="tel" 
                placeholder="Enter your phone number*" 
                style={{
                  width: '100%',
                  padding: '14px',
                  borderRadius: '6px',
                  border: '1px solid #e0e0e0',
                  fontSize: '0.95rem',
                  transition: 'border 0.3s ease',
                  outline: 'none'
                }}
              />
            </div>
            
            <div>
              <label style={{
                display: 'block',
                marginBottom: '8px',
                fontWeight: '500',
                fontSize: '0.9rem'
              }}>YOUR MESSAGE</label>
              <textarea 
                placeholder="Your message here..." 
                rows="5"
                style={{
                  width: '100%',
                  padding: '14px',
                  borderRadius: '6px',
                  border: '1px solid #e0e0e0',
                  fontSize: '0.95rem',
                  transition: 'border 0.3s ease',
                  outline: 'none',
                  resize: 'vertical'
                }}
              ></textarea>
            </div>
            
            <button style={{
              backgroundColor: '#4a6cf7',
              color: 'white',
              border: 'none',
              padding: '14px 28px',
              borderRadius: '6px',
              fontWeight: '600',
              cursor: 'pointer',
              fontSize: '0.95rem',
              alignSelf: 'flex-start',
              transition: 'background-color 0.3s ease',
              textTransform: 'uppercase',
              letterSpacing: '1px'
            }}>Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
