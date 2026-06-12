// src/views/CarePartners.jsx
import { useState } from 'react';
import Accordion from '../components/Accordion';
import { carePartnersContent } from '../data/content';
import './CarePartners.css';

export default function CarePartners({ language }) {
  const t = carePartnersContent[language];
  const [expandedId, setExpandedId] = useState(null);

  const toggleItem = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="care-content-wrapper">
      <header className="care-header">
        <h1>{t.header}</h1>
      </header>

      <Accordion
        items={t.items}
        expandedId={expandedId}
        toggleItem={toggleItem}
        customPrefix="accordion"
      />
    </div>
  );
}