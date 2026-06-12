// src/views/ClinicalTrialsQuiz.jsx
import { useState } from 'react';
import { quizContent } from '../data/content';
import './ClinicalTrialsQuiz.css';
import qrCode from '../assets/images/qr-code.jpg';
import { Logo } from '../components/Icons';

export default function ClinicalTrialsQuiz({ language, onNavigate }) {
  const t = quizContent[language] || quizContent['en'];
  const quizData = t?.data || [];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [showExitModal, setShowExitModal] = useState(false);
  const [completions, setCompletions] = useState(() => {
    try {
      const saved = localStorage.getItem('merck_quiz_completions');
      return saved ? parseInt(saved, 10) : 0;
    } catch (e) {
      console.warn('LocalStorage blocked', e);
      return 0;
    }
  });

  const handleOptionClick = (index) => {
    if (selectedOption !== null) {
      return;
    }

    setSelectedOption(index);
    setShowFeedback(true);
  };

  const handleNext = () => {
    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion(prev => prev + 1);
      setSelectedOption(null);
      setShowFeedback(false);
    } else {
      const newCompletions = completions + 1;
      setCompletions(newCompletions);
      localStorage.setItem('merck_quiz_completions', newCompletions.toString());
      setQuizCompleted(true);
    }
  };

  const onExit = () => onNavigate('dashboard');

  if (quizCompleted) {
    return (
      <div className="quiz-outro-container">
        <div className="quiz-header-logo">
          <Logo />
        </div>
        <h1 className="quiz-outro-title">{t.outroTitle}</h1>
        <div className="quiz-outro-content">
          <img src={qrCode} alt="QR Code" />
          <div>
            <p>Scan to learn more about clinical trials:</p>
            <p className="quiz-outro-link">www.LetsTalkClinicalTrials.com</p>
          </div>
        </div>
        <button className="btn btn-primary" onClick={onExit}>{t.exitBtn}</button>
      </div>
    );
  }

  const data = quizData[currentQuestion];
  if (!data) {
    return null;
  }

  const isCorrect = selectedOption === data.correctIndex;
  const progressPercent = ((currentQuestion + (selectedOption !== null ? 1 : 0)) / quizData.length) * 100;

  return (
    <div className="quiz-app-container">
      <div className="quiz-header">
        <div className="quiz-header-logo">
          <Logo />
        </div>
        <button className="quiz-btn-exit-top" onClick={() => setShowExitModal(true)}>✕</button>
      </div>
      <div className="quiz-progress-bar-container">
        <div
          className="quiz-progress-bar"
          role="progressbar"
          aria-valuenow={Math.round(progressPercent)}
          aria-valuemin={0}
          aria-valuemax={100}
          style={{ width: `${progressPercent}%` }}
        ></div>
      </div>
      <div className="quiz-content">
        <p className="quiz-question-number">{t.questionOf} {currentQuestion + 1} {t.of} {quizData.length}</p>
        <h2 className="quiz-question-text">{data.question}</h2>
        <div className="quiz-options-group">
          {data.options.map((text, index) => {
            let optionClass = "quiz-option";

            if (selectedOption !== null) {
              optionClass += " quiz-disabled";

              if (index === data.correctIndex) {
                optionClass += " quiz-correct";
              } else if (index === selectedOption) {
                optionClass += " quiz-incorrect";
              }
            }

            return (
              <div
                key={index}
                className={optionClass}
                onClick={() => handleOptionClick(index)}
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { handleOptionClick(index); } }}
                role="button"
                tabIndex="0"
              >
                <div className="quiz-option-circle"></div>
                <span className="quiz-option-text">{text}</span>
              </div>
            );
          })}
        </div>
        {showFeedback && (
          <div className="quiz-feedback-section" aria-live="polite">
            <div className={`quiz-did-you-know-box ${!isCorrect ? 'quiz-incorrect-box' : ''}`}>
              <h3 className={`quiz-feedback-header ${isCorrect ? 'quiz-correct-text' : 'quiz-incorrect-text'}`}>
                {isCorrect ? t.correctHeader : t.incorrectHeader}
              </h3>
              <h4 className="quiz-did-you-know-label">{t.didYouKnow}</h4>
              <p className="quiz-did-you-know-text">{data.mediFact}</p>
            </div>
            <button className="btn btn-primary" onClick={handleNext}>
              {currentQuestion === quizData.length - 1 ? t.finishBtn : t.nextBtn}
            </button>
          </div>
        )}
      </div>
      {showExitModal && (
        <div className="quiz-modal-overlay" onClick={() => setShowExitModal(false)}>
          <div className="quiz-modal-content" onClick={(e) => e.stopPropagation()}>
            <p className="quiz-modal-text">{t.modalText}</p>
            <div className="quiz-modal-buttons">
              <button className="btn btn-primary" onClick={() => setShowExitModal(false)}>{t.modalCancel}</button>
              <button className="btn btn-secondary" onClick={onExit}>{t.modalConfirm}</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}