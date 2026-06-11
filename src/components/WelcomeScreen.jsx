// src/WelcomeScreen.jsx
import './WelcomeScreen.css';
import merckLogo from '../assets/images/merck-logo.png';

export default function WelcomeScreen({ onSelectLanguage }) {
  return (
    <div className="welcome-container">
      <div className="welcome-overlay" />
      <div className="welcome-content">
        <div className="welcome-center-block">
          <h1 className="welcome-title">Learn Why Representation Matters in Clinical Research</h1>
          <p>
            Start your journey through interactive tools, videos, and resources designed <br />
            to help you learn what clinical trials are and why representation matters.
          </p>
          <p>
            Select your preferred language to get started.
          </p>
        </div>

        <div className="welcome-button-group">
          <button
            className="btn btn-primary"
            onClick={() => onSelectLanguage('en')}
            aria-label="Select English"
          >
            ENGLISH
          </button>
          <button
            className="btn btn-secondary"
            onClick={() => onSelectLanguage('es')}
            aria-label="Select Spanish"
          >
            ESPAÑOL
          </button>
        </div>

        <img
          src={merckLogo}
          alt="Merck Logo"
          className="welcome-logo"
        />
      </div>
    </div>
  );
}