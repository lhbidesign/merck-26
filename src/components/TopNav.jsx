// src/components/TopNav.jsx
import './TopNav.css';
import merckLogo from '../assets/images/merck-logo.png';

export default function TopNav({ language, setLanguage, onGoHome, title }) {
  return (
    <nav className="top-nav">
      <div className="top-nav-left">
        <button className="top-nav-home-btn" onClick={onGoHome} aria-label="Go Home">
          <svg viewBox="0 0 15 17" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.999981 15.6312V7.13115L7.13998 1.37115L13.28 7.13115V15.6312H0.999981ZM2.41998 14.2112H11.86V7.59115L7.13998 3.17115L2.41998 7.59115V14.2112Z" />
          </svg>
        </button>
        <img src={merckLogo} alt="Merck Logo" className="top-nav-logo" />
      </div>

      {/* NEW: Render the title if it is passed down */}
      {title && <h2 className="top-nav-title">{title}</h2>}

      <div className="top-nav-lang-toggle">
        <button
          className={`lang-btn ${language === 'en' ? 'active' : ''}`}
          onClick={() => setLanguage('en')}
        >
          EN
        </button>
        <span className="top-nav-lang-divider">|</span>
        <button
          className={`lang-btn ${language === 'es' ? 'active' : ''}`}
          onClick={() => setLanguage('es')}
        >
          ES
        </button>
      </div>
    </nav>
  );
}