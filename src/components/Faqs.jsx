// src/components/Faqs.jsx
import { useState } from 'react';
import TopNav from './TopNav';
import Footer from './Footer';
import { faqsContent } from '../data/content';
import './Faqs.css';

const Icon = ({ item }) => {
  if (!item.icon) return <div className="faq-icon-box"></div>;
  return (
    <div className="faq-icon-box" dangerouslySetInnerHTML={{ __html: item.icon }} />
  );
};

export default function Faqs({ language, setLanguage, onGoHome }) {
  const t = faqsContent[language];
  const [expandedId, setExpandedId] = useState(null);

  const toggleItem = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <main className="screen faqs-screen">
      <TopNav language={language} setLanguage={setLanguage} onGoHome={onGoHome} title={t.navTitle} />

      <div className="faqs-content-wrapper">

        <aside className="faqs-sidebar">
          <h1 style={{ whiteSpace: 'pre-line' }}>{t.header}</h1>
        </aside>

        <section className="faqs-accordion-container">
          {t.items.map((item) => {
            const isExpanded = expandedId === item.id;
            return (
              <div key={item.id} className={`faq-accordion-item ${isExpanded ? 'expanded' : ''}`}>

                <button
                  className="faq-accordion-header-row"
                  onClick={() => toggleItem(item.id)}
                  aria-expanded={isExpanded}
                >
                  <Icon item={item} />
                  <h3>{item.title}</h3>
                  <div className="faq-toggle-icon" aria-hidden="true">
                    {isExpanded ? (
                      <svg width="22" height="2" viewBox="0 0 24 2" fill="currentColor"><rect width="24" height="2" /></svg>
                    ) : (
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V3h2v8h8v2h-8v8h-2v-8H3v-2h8z" /></svg>
                    )}
                  </div>
                </button>

                <div className="faq-animated-wrapper" aria-hidden={!isExpanded}>
                  <div className="faq-body-row">
                    <div className="faq-body-content">
                      <p>{item.text}</p>
                    </div>
                  </div>
                </div>

              </div>
            );
          })}
        </section>

      </div>

      <Footer language={language} />
    </main>
  );
}