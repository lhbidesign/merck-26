// src/views/Dashboard.jsx
import { ArrowIcon } from '../components/Icons';
import { dashboardContent } from '../data/content';
import './Dashboard.css';

export default function Dashboard({ language, onNavigate }) {
  const t = dashboardContent[language];

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>{t.title}</h1>
        <p>{t.subtitle}</p>
      </header>

      <div className="dashboard-grid">
        <button className="card card-quiz" onClick={() => onNavigate('quiz')}>
          <h2>{t.cards.quiz}</h2>
          <div className="arrow-icon"><ArrowIcon /></div>
        </button>
        <button className="card card-care" onClick={() => onNavigate('care-partners')}>
          <h2>{t.cards.care}</h2>
          <div className="arrow-icon"><ArrowIcon /></div>
        </button>
        <button className="card card-timeline" onClick={() => onNavigate('timeline')}>
          <h2>{t.cards.timeline}</h2>
          <div className="arrow-icon"><ArrowIcon /></div>
        </button>
        <button className="card card-faqs" onClick={() => onNavigate('faqs')}>
          <h2>{t.cards.faqs}</h2>
          <div className="arrow-icon"><ArrowIcon /></div>
        </button>
        <button className="card card-videos" onClick={() => onNavigate('videos')}>
          <h2>{t.cards.videos}</h2>
          <div className="arrow-icon"><ArrowIcon /></div>
        </button>
      </div>
    </div>
  );
}