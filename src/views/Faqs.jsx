// src/views/Faqs.jsx
import { useState } from 'react';
import Accordion from '../components/Accordion';
import { faqsContent } from '../data/content';
import './Faqs.css';

export default function Faqs({ language }) {
  const t = faqsContent[language] || faqsContent['en'];
  const [expandedId, setExpandedId] = useState(null);

  const toggleItem = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="faqs-content-wrapper">
      <aside className="faqs-sidebar">
        <h1 style={{ whiteSpace: 'pre-line' }}>{t.header}</h1>
      </aside>

      <Accordion
        items={t.items}
        expandedId={expandedId}
        toggleItem={toggleItem}
        customPrefix="faq"
      />
    </div>
  );
}