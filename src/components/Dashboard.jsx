// src/components/Dashboard.jsx
import TopNav from './TopNav';
import { dashboardContent } from '../data/content';
import './Dashboard.css';

const ARROW_SVG = `<svg aria-hidden="true" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.0058 15C21.271 15 21.5254 14.8946 21.7129 14.7071C21.9004 14.5196 22.0058 14.2652 22.0058 14V1C22.0058 0.734784 21.9004 0.48043 21.7129 0.292893C21.5254 0.105357 21.271 0 21.0058 0H8.0058C7.74058 0 7.48623 0.105357 7.29869 0.292893C7.11116 0.48043 7.0058 0.734784 7.0058 1C7.0058 1.26522 7.11116 1.51957 7.29869 1.70711C7.48623 1.89464 7.74058 2 8.0058 2H18.5958L0.295798 20.29C0.20207 20.383 0.127676 20.4936 0.0769072 20.6154C0.0261385 20.7373 0 20.868 0 21C0 21.132 0.0261385 21.2627 0.0769072 21.3846C0.127676 21.5064 0.20207 21.617 0.295798 21.71C0.388761 21.8037 0.499362 21.8781 0.621222 21.9289C0.743081 21.9797 0.873786 22.0058 1.0058 22.0058C1.13781 22.0058 1.26852 21.9797 1.39038 21.9289C1.51223 21.8781 1.62284 21.8037 1.7158 21.71L20.0058 3.41V14C20.0058 14.2652 20.1112 14.5196 20.2987 14.7071C20.4862 14.8946 20.7406 15 21.0058 15Z" fill="currentColor"/></svg>`;

const ArrowIcon = () => (
  <div className="arrow-icon" dangerouslySetInnerHTML={{ __html: ARROW_SVG }} />
);

export default function Dashboard({ language, setLanguage, onGoHome, onNavigate }) {
  const t = dashboardContent[language];

  return (
    <main className="screen dashboard-screen">
      <TopNav language={language} setLanguage={setLanguage} onGoHome={onGoHome} />

      <div className="dashboard-container">
        <header className="dashboard-header">
          <h1>{t.title}</h1>
          <p>{t.subtitle}</p>
        </header>

        <div className="dashboard-grid">
          <div className="card card-quiz">
            <h2>{t.cards.quiz}</h2>
            <ArrowIcon />
          </div>

          {/* REFACTOR: Changed to a button for screenreader & keyboard accessibility */}
          <button
            className="card card-care"
            onClick={() => onNavigate('care-partners')}
            aria-label={`Maps to ${t.cards.care}`}
          >
            <h2>{t.cards.care}</h2>
            <ArrowIcon />
          </button>

          <div className="card card-timeline">
            <h2>{t.cards.timeline}</h2>
            <ArrowIcon />
          </div>
          <div className="card card-faqs">
            <h2>{t.cards.faqs}</h2>
            <ArrowIcon />
          </div>
          <div className="card card-videos">
            <h2>{t.cards.videos}</h2>
            <ArrowIcon />
          </div>
        </div>
      </div>
    </main>
  );
}