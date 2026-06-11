// src/components/Footer.jsx
import './Footer.css';
import qrCode from '../assets/images/qr-code.jpg';

const dictionary = {
  en: {
    scan: "Scan to learn more about clinical trials",
    url: "LetsTalkClinicalTrials.com",
    copy: "Copyright © 2026 Merck & Co., Inc., Rahway, NJ, USA, and its affiliates. All rights reserved."
  },
  es: {
    scan: "Escanee para aprender más sobre ensayos clínicos",
    url: "LetsTalkClinicalTrials.com",
    copy: "Copyright © 2026 Merck & Co., Inc., Rahway, NJ, USA, y sus filiales. Todos los derechos reservados."
  }
};

export default function Footer({ language }) {
  const t = dictionary[language];

  return (
    <footer className="footer-container">
      <div className="footer-left">
        <div className="footer-qr">
          <img src={qrCode} className="footer-qr-image" alt="QR Code" />
        </div>
        <div>
          <p className="footer-scan">{t.scan}</p>
          <p className="footer-url">{t.url}</p>
        </div>
      </div>
      <div>
        <p className="footer-copy">{t.copy}</p>
      </div>
    </footer>
  );
}