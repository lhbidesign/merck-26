// src/views/Timeline.jsx
import { useState } from 'react';
import { timelineContent } from '../data/content';
import './Timeline.css';
import { CheckIcon, DownArrowIcon } from '../components/Icons';

export default function Timeline({ language }) {
  const t = timelineContent[language] || timelineContent['en'];
  const [activeIndex, setActiveIndex] = useState(0);
  const [showIntro, setShowIntro] = useState(true);
  const activeEra = t.eras[activeIndex] || t.eras[0];

  const handleNavClick = (index) => {
    setActiveIndex(index);
    setShowIntro(false);
  };

  if (!activeEra) {
    return null
  };

  return (
    <>
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
    </>
  );
}