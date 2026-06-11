// src/components/CarePartners.jsx
import { useState } from 'react';
import TopNav from './TopNav';
import Footer from './Footer';
import { carePartnersContent } from '../data/content';
import './CarePartners.css';

const Icon = ({ item }) => {
  if (!item.icon) return <div className="accordion-icon-box"></div>;
  return (
    <div className="accordion-icon-box" dangerouslySetInnerHTML={{ __html: item.icon }} />
  );
};

export default function CarePartners({ language, setLanguage, onGoHome }) {
  const t = carePartnersContent[language];
  const [expandedId, setExpandedId] = useState(2);

  const toggleItem = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <main className="screen care-partners-screen">
      <TopNav language={language} setLanguage={setLanguage} onGoHome={onGoHome} title={t.navTitle} />

      <div className="care-content-wrapper">
        <header className="care-header">
          <h1>{t.header}</h1>
        </header>

        <div className="accordion-container">
          {t.items.map((item) => {
            const isExpanded = expandedId === item.id;
            return (
              <div key={item.id} className={`accordion-item ${isExpanded ? 'expanded' : ''}`}>

                {/* REFACTOR: Changed div to button, added aria-expanded */}
                <button
                  className="accordion-header-row"
                  onClick={() => toggleItem(item.id)}
                  aria-expanded={isExpanded}
                >
                  <Icon item={item} />
                  <h3>{item.title}</h3>
                  <div className="accordion-toggle-icon" aria-hidden="true">
                    {isExpanded ? (
                      <svg width="22" height="2" viewBox="0 0 24 2" fill="currentColor"><rect width="24" height="2" /></svg>
                    ) : (
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V3h2v8h8v2h-8v8h-2v-8H3v-2h8z" /></svg>
                    )}
                  </div>
                </button>

                <div className="accordion-animated-wrapper" aria-hidden={!isExpanded}>
                  <div className="accordion-body-row">
                    <div className="accordion-body-content">
                      <p>{item.text}</p>
                    </div>
                  </div>
                </div>

              </div>
            );
          })}
        </div>
      </div>

      <Footer language={language} />
    </main>
  );
}