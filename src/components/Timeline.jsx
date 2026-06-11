// src/components/Timeline.jsx
import { useState } from 'react';
import TopNav from './TopNav';
import { timelineContent } from '../data/content';
import './Timeline.css';

const CheckIcon = () => (
  <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M8.5 0C3.80575 0 0 3.80575 0 8.5C0 13.1943 3.80575 17 8.5 17C13.1943 17 17 13.1943 17 8.5C17 3.80575 13.1943 0 8.5 0ZM13.4883 5C13.6211 4.99707 13.75 5.04688 13.8457 5.13867C13.9414 5.23047 13.9971 5.35645 14 5.48827C14.0029 5.62109 13.9531 5.75 13.8613 5.8457C11.0811 8.75495 9.88682 9.94245 7.11132 12.8457C6.92382 13.041 6.61425 13.0527 6.41307 12.8701L3.66307 10.3701C3.45897 10.1846 3.44432 9.86816 3.62987 9.66406C3.71874 9.56543 3.84374 9.50683 3.97655 9.50098C4.10838 9.49414 4.23827 9.54102 4.33592 9.62988L6.72655 11.8037C9.22362 9.19621 10.502 7.91321 13.1385 5.15521V5.15423C13.2303 5.05853 13.3564 5.00293 13.4883 5Z"
      fill="url(#timelineBulletGradient)"
    />
    <defs>
      <radialGradient
        id="timelineBulletGradient"
        cx="0" cy="0" r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(8 8.25) rotate(44.1931) scale(12.5524)"
      >
        <stop stopColor="#00857C" stopOpacity="0.4" />
        <stop offset="1" stopColor="white" />
      </radialGradient>
    </defs>
  </svg>
);

const DownArrowIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="5" x2="12" y2="19"></line>
    <polyline points="19 12 12 19 5 12"></polyline>
  </svg>
);

export default function Timeline({ language, setLanguage, onGoHome }) {
  const t = timelineContent[language];
  const [activeIndex, setActiveIndex] = useState(0);
  const [showIntro, setShowIntro] = useState(true);
  const activeEra = t.eras[activeIndex];

  const handleNavClick = (index) => {
    setActiveIndex(index);
    setShowIntro(false);
  };

  if (!activeEra) return null;

  return (
    <main className="screen timeline-screen">
      <TopNav language={language} setLanguage={setLanguage} onGoHome={onGoHome} title={t.navTitle} />

      {showIntro ? (
        <section className="timeline-intro-area">
          <div className="timeline-intro-content">
            <h1 className="intro-title">How clinical trials today are designed to protect and include you</h1>
            <p className="intro-subtitle">Tap an era below to explore</p>
            <button
              className="intro-down-btn"
              onClick={() => setShowIntro(false)}
              aria-label="Explore timeline"
            >
              <DownArrowIcon />
            </button>
            <p className="intro-copyright">{t.copy}</p>
          </div>
        </section>
      ) : (
        <section className="timeline-main-area">
          <div className="timeline-content-fade" key={activeEra.id}>
            <div className="timeline-image-col">
              <img src={activeEra.image} alt={activeEra.title} className="timeline-image" />
            </div>
            <div className="timeline-text-col">
              <h1 className="era-year">{activeEra.year}</h1>
              <h2 className="era-title">{activeEra.title}</h2>
              <p className="era-subtitle">{activeEra.subtitle}</p>
              <ul className="era-bullets">
                {activeEra.bullets.map((bullet, idx) => (
                  <li key={idx}>
                    <CheckIcon />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
              <div className="era-disclaimer-box">
                <p>{t.disclaimer}</p>
                <p className="era-sources">{t.sources}</p>
              </div>
            </div>
          </div>
          <div className="timeline-copyright">{t.copy}</div>
        </section>
      )}

      <nav className="timeline-bottom-nav">
        <div className="timeline-connecting-line"></div>
        <div
          className="timeline-nav-highlight"
          style={{
            transform: `translateX(${activeIndex * 100}%)`,
            opacity: showIntro ? 0 : 1
          }}
        ></div>
        {t.eras.map((era, index) => {
          const isActive = !showIntro && activeIndex === index;
          return (
            <button
              key={era.id}
              className={`timeline-nav-btn ${isActive ? 'active' : ''}`}
              onClick={() => handleNavClick(index)}
              aria-label={`View era ${era.year}`}
              aria-current={isActive}
            >
              <div className="nav-dot"></div>
              <span className="nav-year">{era.year}</span>
            </button>
          );
        })}
      </nav>
    </main>
  );
}