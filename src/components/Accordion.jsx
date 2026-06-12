import './Accordion.css';
import { CollapseIcon, ExpandIcon } from './Icons';

export default function Accordion({ items, expandedId, toggleItem, customPrefix = 'accordion' }) {
  return (
    <div className={`${customPrefix}-container`}>
      {items.map((item) => {
        const isExpanded = expandedId === item.id;
        return (
          <div key={item.id} className={`${customPrefix}-item ${isExpanded ? 'expanded' : ''}`} data-accordion-item>
            <button
              className={`${customPrefix}-header-row`}
              onClick={() => toggleItem(item.id)}
              aria-expanded={isExpanded}
            >
              {item.icon ? (
                <div className={`${customPrefix}-icon-box`} dangerouslySetInnerHTML={{ __html: item.icon }} />
              ) : (
                <div className={`${customPrefix}-icon-box`}></div>
              )}
              <h3>{item.title}</h3>
              <div className={`${customPrefix}-toggle-icon`} aria-hidden="true">
                {isExpanded ? (
                  <ExpandIcon />
                ) : (
                  <CollapseIcon />
                )}
              </div>
            </button>

            <div className={`${customPrefix}-animated-wrapper`} data-accordion-animated-wrapper aria-hidden={!isExpanded}>
              <div className={`${customPrefix}-body-row`} data-accordion-body-row>
                <div className={`${customPrefix}-body-content`} data-accordion-body-content>
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