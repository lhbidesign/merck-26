import './Accordion.css';
import { CollapseIcon, ExpandIcon } from './Icons';

export default function Accordion({ items, expandedId, toggleItem, customPrefix = 'custom' }) {
  return (
    <div className={`${customPrefix}-accordion-container`}>
      {items.map((item) => {
        const isExpanded = expandedId === item.id;
        return (
          <div
            key={item.id}
            className={`accordion-item ${customPrefix}-accordion-item`}
            data-expanded={isExpanded ? true : false}
          >
            <button
              className={`${customPrefix}-accordion-header-row`}
              onClick={() => toggleItem(item.id)}
              aria-expanded={isExpanded}
            >
              {item.icon ? (
                <div className={`${customPrefix}-accordion-icon-box`} dangerouslySetInnerHTML={{ __html: item.icon }} />
              ) : (
                <div className={`${customPrefix}-accordion-icon-box`}></div>
              )}
              <h3>{item.title}</h3>
              <div className="accordion-toggle-icon" aria-hidden="true">
                {isExpanded ? (
                  <ExpandIcon />
                ) : (
                  <CollapseIcon />
                )}
              </div>
            </button>

            <div className={`accordion-animated-wrapper ${customPrefix}-accordion-animated-wrapper`} aria-hidden={!isExpanded}>
              <div className={`accordion-body-row ${customPrefix}-accordion-body-row`}>
                <div className={`accordion-body-content ${customPrefix}-accordion-body-content`}>
                  <p>{item.text}</p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}