import React, { useState } from 'react';

export default function KlaraWebsite() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div style={{ 
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, sans-serif',
      backgroundColor: '#F4F3EF',
      minHeight: '100vh',
      color: '#000'
    }}>
      {/* Navigation */}
      <nav style={{
        position: 'sticky',
        top: 0,
        backgroundColor: '#F4F3EF',
        padding: '1.5rem 2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottom: '1px solid #000',
        zIndex: 1000
      }}>
        <div style={{
          fontSize: '1rem',
          fontWeight: 400,
          letterSpacing: '0.5px',
          textTransform: 'uppercase'
        }}>
          KLARA LOSERT
        </div>

        {/* Desktop Navigation */}
        <ul style={{
          display: 'flex',
          gap: '2rem',
          listStyle: 'none',
          margin: 0,
          padding: 0
        }}
        className="desktop-nav">
          {['my work', 'featured in', "let's connect"].map((item, i) => (
            <li key={i}>
              <a href={`#${item.replace(/'/g, '').replace(/ /g, '-')}`}
                style={{
                  textDecoration: 'none',
                  color: '#000',
                  fontSize: '0.95rem',
                  position: 'relative',
                  paddingBottom: '2px'
                }}
                className="nav-link">
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger Menu */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{
            display: 'none',
            flexDirection: 'column',
            gap: '5px',
            cursor: 'pointer',
            background: 'none',
            border: 'none',
            padding: 0,
            zIndex: 1001
          }}
          className="hamburger">
          <span style={{
            width: '25px',
            height: '2px',
            backgroundColor: '#000',
            transition: 'all 0.3s ease',
            transform: mobileMenuOpen ? 'rotate(45deg) translate(7px, 7px)' : 'none'
          }} />
          <span style={{
            width: '25px',
            height: '2px',
            backgroundColor: '#000',
            transition: 'all 0.3s ease',
            opacity: mobileMenuOpen ? 0 : 1
          }} />
          <span style={{
            width: '25px',
            height: '2px',
            backgroundColor: '#000',
            transition: 'all 0.3s ease',
            transform: mobileMenuOpen ? 'rotate(-45deg) translate(7px, -7px)' : 'none'
          }} />
        </button>
      </nav>

      {/* Mobile Drawer */}
      <div style={{
        position: 'fixed',
        top: 0,
        right: mobileMenuOpen ? 0 : '-100%',
        width: '100%',
        height: '100vh',
        backgroundColor: '#F4F3EF',
        transition: 'right 0.3s ease',
        zIndex: 999,
        padding: '6rem 2rem 2rem'
      }}>
        <ul style={{
          listStyle: 'none',
          display: 'flex',
          flexDirection: 'column',
          gap: '2rem',
          margin: 0,
          padding: 0
        }}>
          {['my work', 'featured in', "let's connect"].map((item, i) => (
            <li key={i}>
              <a
                href={`#${item.replace(/'/g, '').replace(/ /g, '-')}`}
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  textDecoration: 'none',
                  color: '#000',
                  fontSize: '1.5rem'
                }}>
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Hero Section */}
      <section style={{
        padding: '3rem 3rem',
        maxWidth: '1400px',
        margin: '0 auto'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '3rem',
          marginBottom: '3rem'
        }}
        className="hero-top">
          {/* Left column with tagline at top and name at bottom */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}>
            {/* Tagline at top */}
            <div style={{
              fontSize: '40px',
              lineHeight: 1.1,
              fontWeight: 400,
              letterSpacing: '-0.02em'
            }}>
              I build content strategies, host conversations on stages, and bring people together
            </div>
            
            {/* Name + CTAs at bottom (aligned with bottom of photo) */}
            <div>
              <p style={{
                fontSize: '32px',
                fontWeight: 400,
                marginBottom: '0.5rem',
                lineHeight: 1.4
              }}>
                Hey there,
              </p>
              <h1 style={{
                fontSize: '160px',
                fontWeight: 400,
                lineHeight: 0.9,
                marginBottom: '1.5rem',
                margin: '0 0 1.5rem 0',
                letterSpacing: '-0.04em'
              }}
              className="hero-name">
                I'm Klara
              </h1>
              <div style={{
                display: 'flex',
                gap: '1rem',
                flexWrap: 'wrap'
              }}>
                <a
                  href="https://www.linkedin.com/in/klaralosert/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    padding: '0.75rem 1.5rem',
                    textDecoration: 'none',
                    fontSize: '0.95rem',
                    borderRadius: '50px',
                    backgroundColor: '#000',
                    color: '#F4F3EF',
                    border: '1px solid #000',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}
                  className="btn-primary">
                  Connect with me
                  <span>→</span>
                </a>
                <a
                  href="#work"
                  style={{
                    padding: '0.75rem 1.5rem',
                    textDecoration: 'none',
                    fontSize: '0.95rem',
                    borderRadius: '50px',
                    backgroundColor: 'transparent',
                    color: '#000',
                    border: '1px solid #000',
                    display: 'inline-flex',
                    alignItems: 'center'
                  }}
                  className="btn-secondary">
                  See my work
                </a>
              </div>
            </div>
          </div>
          
          {/* Photo on right */}
          <div style={{
            width: '100%',
            aspectRatio: '3/4',
            backgroundColor: '#ddd',
            overflow: 'hidden'
          }}>
            <img 
              src="Klara_Losert.jpg" 
              alt="Klara Losert"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
            />
          </div>
        </div>
      </section>

      {/* Building Things Section */}
      <section style={{
        maxWidth: '1400px',
        margin: '0 auto'
      }}>
        {/* Top part: Heading + Description */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '4rem',
          padding: '4rem 3rem',
          borderTop: '1px solid #000',
          borderBottom: '1px solid #000'
        }}
        className="building-top">
          <h2 style={{
            fontSize: '3.5rem',
            fontWeight: 400,
            lineHeight: 1.1,
            margin: 0
          }}
          className="building-heading">
            Building things that bring people together
          </h2>
          <p style={{
            fontSize: '1rem',
            lineHeight: 1.6,
            alignSelf: 'center',
            margin: 0
          }}>
            I've built communities, software products, and documented the whole journey through content. These days I bring all of that experience together—helping teams build content systems, facilitating conversations on stage, and creating spaces where people connect.
          </p>
        </div>

        {/* Three Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          borderBottom: '1px solid #000'
        }}
        className="cards-grid">
          {/* Typebar Card */}
          <div style={{
            padding: '3rem 2rem 3rem 3rem',
            borderRight: '1px solid #000'
          }}
          className="card card-first">
            <div style={{
              width: '50px',
              height: '50px',
              marginBottom: '2rem'
            }}>
              <img 
                src="typebar_icon.png" 
                alt="Typebar"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain'
                }}
              />
            </div>
            <h3 style={{
              fontSize: '2rem',
              fontWeight: 400,
              marginBottom: '1rem'
            }}>
              Typebar
            </h3>
            <p style={{
              fontSize: '0.95rem',
              lineHeight: 1.5,
              color: '#333'
            }}>
              Content marketing studio. Strategy, distribution, and templates for teams building big things, plus a bi-weekly newsletter on content systems.
            </p>
          </div>

          {/* Girlhood Card */}
          <div style={{
            padding: '3rem 2rem',
            borderRight: '1px solid #000'
          }}
          className="card">
            <div style={{
              width: '50px',
              height: '50px',
              marginBottom: '2rem'
            }}>
              <img 
                src="girlhood_icon.png" 
                alt="Girlhood"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain'
                }}
              />
            </div>
            <h3 style={{
              fontSize: '2rem',
              fontWeight: 400,
              marginBottom: '1rem'
            }}>
              Girlhood
            </h3>
            <p style={{
              fontSize: '0.95rem',
              lineHeight: 1.5,
              color: '#333'
            }}>
              Building a private network for women building careers they're proud of. If that sound like you, we'd love to have you.
            </p>
          </div>

          {/* Moderation Card */}
          <div style={{
            padding: '3rem 3rem 3rem 2rem'
          }}
          className="card card-last">
            <p style={{
              fontSize: '0.75rem',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              color: '#898989',
              marginBottom: '1.5rem',
              height: '50px',
              display: 'flex',
              alignItems: 'flex-end'
            }}>
              Emcee & Speaker
            </p>
            <h3 style={{
              fontSize: '2rem',
              fontWeight: 400,
              marginBottom: '1rem'
            }}>
              Moderation
            </h3>
            <p style={{
              fontSize: '0.95rem',
              lineHeight: 1.5,
              color: '#333'
            }}>
              I moderate events, speak on stages, and teach practical skills in public speaking, content creation, and community building.
            </p>
          </div>
        </div>
      </section>

      {/* On Stage Section */}
      <section style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '4rem 3rem'
      }}>
        <h2 style={{
          fontSize: '96px',
          fontWeight: 400,
          lineHeight: 1.05,
          letterSpacing: '-0.04em',
          marginBottom: '3rem'
        }}
        className="stage-heading">
          On stage
        </h2>

        {/* Grid of speaking engagements */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '2rem'
        }}
        className="stage-grid">
          {/* Item 1 */}
          <div className="stage-item">
            <div style={{
              width: '100%',
              aspectRatio: '16/9',
              overflow: 'hidden',
              marginBottom: '1rem'
            }}>
              <img 
                src="stage-1.png" 
                alt="Hosting Fire-side Chat at Untold Stories Conference"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
            </div>
            <h3 style={{
              fontSize: '18px',
              fontWeight: 400,
              lineHeight: 1.67,
              marginBottom: '0.25rem'
            }}>
              Hosting Fire-side Chat at Untold Stories Conference, Budapest
            </h3>
            <p style={{
              fontSize: '14px',
              color: '#898989'
            }}>
              2022
            </p>
          </div>

          {/* Item 2 */}
          <div className="stage-item">
            <div style={{
              width: '100%',
              aspectRatio: '16/9',
              overflow: 'hidden',
              marginBottom: '1rem'
            }}>
              <img 
                src="stage-2.png" 
                alt="Hosting & Organizing Community Rebellion Conference"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
            </div>
            <h3 style={{
              fontSize: '18px',
              fontWeight: 400,
              lineHeight: 1.67,
              marginBottom: '0.25rem'
            }}>
              Hosting & Organizing Community Rebellion Conference by Talkbase
            </h3>
            <p style={{
              fontSize: '14px',
              color: '#898989'
            }}>
              2023
            </p>
          </div>

          {/* Item 3 */}
          <div className="stage-item">
            <div style={{
              width: '100%',
              aspectRatio: '16/9',
              overflow: 'hidden',
              marginBottom: '1rem'
            }}>
              <img 
                src="stage-3.png" 
                alt="Panel Moderation at Career & Leadership Conference"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
            </div>
            <h3 style={{
              fontSize: '18px',
              fontWeight: 400,
              lineHeight: 1.67,
              marginBottom: '0.25rem'
            }}>
              Panel Moderation at Career & Leadership Conference by Femme Palette
            </h3>
            <p style={{
              fontSize: '14px',
              color: '#898989'
            }}>
              2024
            </p>
          </div>

          {/* Item 4 */}
          <div className="stage-item">
            <div style={{
              width: '100%',
              aspectRatio: '16/9',
              overflow: 'hidden',
              marginBottom: '1rem'
            }}>
              <img 
                src="stage-4.png" 
                alt="Guest speaker at Founder Community by Hubspot"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
            </div>
            <h3 style={{
              fontSize: '18px',
              fontWeight: 400,
              lineHeight: 1.67,
              marginBottom: '0.25rem'
            }}>
              Guest speaker at Founder Community by Hubspot
            </h3>
            <p style={{
              fontSize: '14px',
              color: '#898989'
            }}>
              2024
            </p>
          </div>

          {/* Item 5 */}
          <div className="stage-item">
            <div style={{
              width: '100%',
              aspectRatio: '16/9',
              overflow: 'hidden',
              marginBottom: '1rem'
            }}>
              <img 
                src="stage-5.jpg" 
                alt="Lecturer at Grow Your Brand Online"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
            </div>
            <h3 style={{
              fontSize: '18px',
              fontWeight: 400,
              lineHeight: 1.67,
              marginBottom: '0.25rem'
            }}>
              Lecturer at Grow Your Brand Online – Content That Connects With Customers by Femme Palette
            </h3>
            <p style={{
              fontSize: '14px',
              color: '#898989'
            }}>
              2025
            </p>
          </div>

          {/* Item 6 */}
          <div className="stage-item">
            <div style={{
              width: '100%',
              aspectRatio: '16/9',
              overflow: 'hidden',
              marginBottom: '1rem'
            }}>
              <img 
                src="stage-6.jpg" 
                alt="Guest speaker at Women in Tech"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
            </div>
            <h3 style={{
              fontSize: '18px',
              fontWeight: 400,
              lineHeight: 1.67,
              marginBottom: '0.25rem'
            }}>
              Guest speaker at Women in Tech: The Gender Algorithm, by ČVUT and The French Embassy Prague
            </h3>
            <p style={{
              fontSize: '14px',
              color: '#898989'
            }}>
              2023
            </p>
          </div>

          {/* Item 7 */}
          <div className="stage-item">
            <div style={{
              width: '100%',
              aspectRatio: '16/9',
              overflow: 'hidden',
              marginBottom: '1rem'
            }}>
              <img 
                src="stage-7.jpg" 
                alt="Moderation at Career & Leadership Conference"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
            </div>
            <h3 style={{
              fontSize: '18px',
              fontWeight: 400,
              lineHeight: 1.67,
              marginBottom: '0.25rem'
            }}>
              Moderation at Career & Leadership Conference, Femme Palette
            </h3>
            <p style={{
              fontSize: '14px',
              color: '#898989'
            }}>
              2025
            </p>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '4rem 3rem 2rem'
      }}>
        {/* Let's connect heading + social icons */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '2rem'
        }}
        className="footer-top">
          <h2 style={{
            fontSize: '96px',
            fontWeight: 400,
            lineHeight: 1.05,
            letterSpacing: '-0.04em',
            margin: 0
          }}
          className="footer-heading">
            Let's connect
          </h2>
          
          {/* Social icons */}
          <div style={{
            display: 'flex',
            gap: '1rem',
            alignItems: 'center'
          }}>
            <a 
              href="https://www.linkedin.com/in/klaralosert/" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{
                display: 'block',
                width: '40px',
                height: '40px'
              }}>
              <img 
                src="icon-linkedin.png" 
                alt="LinkedIn"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain'
                }}
              />
            </a>
            <a 
              href="https://www.instagram.com/klaralosert/" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{
                display: 'block',
                width: '40px',
                height: '40px'
              }}>
              <img 
                src="icon-instagram.png" 
                alt="Instagram"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain'
                }}
              />
            </a>
            <a 
              href="https://substack.com/@wantitall" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{
                display: 'block',
                width: '40px',
                height: '40px'
              }}>
              <img 
                src="icon-substack.png" 
                alt="Substack"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain'
                }}
              />
            </a>
          </div>
        </div>

        {/* CTA Buttons */}
        <div style={{
          display: 'flex',
          gap: '1rem',
          paddingBottom: '2rem',
          borderBottom: '1px solid #000',
          marginBottom: '2rem',
          flexWrap: 'wrap'
        }}>
          <a
            href="https://calendar.app.google/ogTHg5PiFWTQZPXM7"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: '0.75rem 1.5rem',
              textDecoration: 'none',
              fontSize: '0.95rem',
              borderRadius: '50px',
              backgroundColor: '#000',
              color: '#F4F3EF',
              border: '1px solid #000',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}
            className="btn-primary">
            Schedule a Call
            <span>→</span>
          </a>
          <a
            href="mailto:klara@typebar.studio"
            style={{
              padding: '0.75rem 1.5rem',
              textDecoration: 'none',
              fontSize: '0.95rem',
              borderRadius: '50px',
              backgroundColor: 'transparent',
              color: '#000',
              border: '1px solid #000',
              display: 'inline-flex',
              alignItems: 'center'
            }}
            className="btn-secondary">
            Send Me an Email
          </a>
        </div>

        {/* Footer bottom */}
        <div style={{
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center',
          fontSize: '14px'
        }}
        className="footer-bottom">
          <p style={{ margin: 0, color: '#898989' }}>
            © 2026. Designed by ANY LABS
          </p>
        </div>
      </footer>

      <style>{`
        .nav-link::after {
          content: '';
          position: absolute;
          width: 0;
          height: 1px;
          bottom: 0;
          left: 0;
          background-color: #000;
          transition: width 0.3s ease;
        }
        .nav-link:hover::after {
          width: 100%;
        }
        .btn-primary:hover {
          background-color: #333 !important;
        }
        .btn-secondary:hover {
          background-color: #000 !important;
          color: #F4F3EF !important;
        }
        @media (max-width: 768px) {
          .desktop-nav {
            display: none !important;
          }
          .hamburger {
            display: flex !important;
          }
          .hero-top {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
          .hero-name {
            font-size: 64px !important;
          }
          .building-top {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
            padding: 2rem 1.5rem !important;
          }
          .building-heading {
            font-size: 2.5rem !important;
          }
          .cards-grid {
            grid-template-columns: 1fr !important;
          }
          .card {
            border-right: none !important;
            border-bottom: 1px solid #000 !important;
            padding: 2rem 1.5rem !important;
          }
          .card:last-child {
            border-bottom: none !important;
          }
          .stage-heading {
            font-size: 64px !important;
          }
          .stage-grid {
            grid-template-columns: 1fr !important;
          }
          .footer-heading {
            font-size: 64px !important;
          }
          .footer-top {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 2rem !important;
          }
          .footer-bottom {
            justify-content: flex-start !important;
          }
        }
      `}</style>
    </div>
  );
}