// src/views/AdminScreen.jsx
import { useState } from 'react';
import './AdminScreen.css';

export default function AdminScreen({ onClose }) {
  const [completions, setCompletions] = useState(() => {
    try {
      const saved = localStorage.getItem('merck_quiz_completions');
      const parsed = parseInt(saved, 10) || 0;

      return parsed;
    } catch {
      return 0;
    }
  });

  const handleClear = () => {
    try {
      localStorage.setItem('merck_quiz_completions', '0');
    } catch (e) {
      console.error("Storage error:", e);
    }
    setCompletions(0);
  };

  return (
    <div className="admin-container">
      <h1 className="admin-title">Kiosk Administration</h1>

      <div className="admin-card">
        <h2 className="admin-card-title">Quiz Completions</h2>
        <p className="admin-count">{completions}</p>
      </div>

      <div className="admin-buttons-container">
        <button className="btn btn-clear" onClick={handleClear}>
          Clear Submissions
        </button>

        <button className="btn btn-primary" onClick={onClose}>
          Return to Kiosk
        </button>
      </div>
    </div>
  );
}