import { useState, useEffect, useRef } from 'react';
import WelcomeScreen from './views/WelcomeScreen';
import Dashboard from './views/Dashboard';
import ClinicalTrialsQuiz from './views/ClinicalTrialsQuiz';
import CarePartners from './views/CarePartners';
import Timeline from './views/Timeline';
import Faqs from './views/Faqs';
import Videos from './views/Videos';
import TopNav from './components/TopNav';
import Footer from './components/Footer';
import AdminScreen from './views/AdminScreen';
import { carePartnersContent, faqsContent, quizContent, timelineContent, videosContent } from './data/content';

function App() {
  const [currentScreen, setCurrentScreen] = useState('welcome');
  const [language, setLanguage] = useState('en');

  const tapCount = useRef(0);
  const tapTimeout = useRef(null);

  const onNavigate = (screen) => setCurrentScreen(screen);

  const screenProps = {
    language,
    onNavigate
  };

  const handleLanguageSelection = (selectedLang) => {
    setLanguage(selectedLang);
    setCurrentScreen('dashboard');
  };

  const getNavTitle = () => {
    switch (currentScreen) {
      case 'care-partners': return carePartnersContent[language].navTitle;
      case 'faqs': return faqsContent[language].navTitle;
      case 'videos': return videosContent[language].navTitle;
      case 'timeline': return timelineContent[language].navTitle;
      case 'quiz': return quizContent[language].navTitle;
      default: return null;
    }
  };

  const handleSecretClick = () => {
    tapCount.current += 1;

    clearTimeout(tapTimeout.current);

    if (tapCount.current >= 5) {
      setCurrentScreen('admin');
      tapCount.current = 0;
      return;
    }

    tapTimeout.current = setTimeout(() => {
      tapCount.current = 0;
    }, 2000);
  };

  const showFooter = currentScreen === 'faqs' || currentScreen === 'care-partners';

  let screenClass;
  switch (currentScreen) {
    case 'dashboard': screenClass = 'dashboard-screen'; break;
    case 'care-partners': screenClass = 'care-partners-screen'; break;
    case 'faqs': screenClass = 'faqs-screen'; break;
    case 'videos': screenClass = 'videos-screen'; break;
    case 'timeline': screenClass = 'timeline-screen'; break;
    case 'quiz': screenClass = 'quiz-screen'; break;
    default: screenClass = '';
  }

  useEffect(() => {
    const videosToCache = [
      '/trials-en.mp4',
      '/trust-en.mp4',
      '/trust-es.mp4'
    ];

    const warmCache = async () => {
      for (const video of videosToCache) {
        try {
          const response = await fetch(video, {
            method: 'GET'
          });

          if (response.ok) {
            console.log(`Video safely cached for offline: ${video}`);
          }
        } catch (err) {
          console.error(`Failed to cache ${video}`, err);
        }
      }
    };

    if (navigator.onLine) {
      warmCache();
    }
  }, []);

  if (currentScreen === 'admin') {
    return <AdminScreen onClose={() => setCurrentScreen('welcome')} />;
  }

  return (
    <>
      {currentScreen === 'welcome' ? (
        <WelcomeScreen onSelectLanguage={handleLanguageSelection} />
      ) : (
        <main className={`screen ${screenClass}`}>
          <TopNav
            language={language}
            setLanguage={setLanguage}
            onGoHome={() => setCurrentScreen('dashboard')}
            onReload={() => setCurrentScreen('welcome')}
            title={getNavTitle()}
          />

          {currentScreen === 'dashboard' && <Dashboard {...screenProps} />}
          {currentScreen === 'quiz' && <ClinicalTrialsQuiz {...screenProps} />}
          {currentScreen === 'care-partners' && <CarePartners {...screenProps} />}
          {currentScreen === 'timeline' && <Timeline {...screenProps} />}
          {currentScreen === 'faqs' && <Faqs {...screenProps} />}
          {currentScreen === 'videos' && <Videos {...screenProps} />}

          {showFooter && <Footer language={language} />}
        </main>
      )}

      <div
        onClick={handleSecretClick}
        style={{
          position: 'fixed',
          bottom: 0,
          right: 0,
          width: '120px',
          height: '120px',
          zIndex: 9999,
          background: 'transparent'
        }}
        aria-hidden="true"
      />
    </>
  );
}

export default App;