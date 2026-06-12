// src/views/TopNav.jsx
import './TopNav.css';
import merckLogo from '../assets/images/merck-logo.png';
import { HomeIcon } from './Icons';

export default function TopNav({ language, setLanguage, onGoHome, onReload, title }) {
  return (
    <nav className="top-nav">
      <div className="top-nav-left">
        <button className="top-nav-home-btn" onClick={onGoHome} aria-label="Go Home">
          <HomeIcon />
        </button>
        <button className="top-nav-reload-btn" onClick={onReload} aria-label="Reload">
          <img src={merckLogo} alt="Merck Logo" className="top-nav-logo" />
        </button>
      </div>

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