import { useState, useEffect } from 'react';
import WelcomeScreen from './components/WelcomeScreen';
import Dashboard from './components/Dashboard';
import CarePartners from './components/CarePartners';
import Faqs from './components/Faqs';
import Videos from './components/Videos';
import Timeline from './components/Timeline';

function App() {
  const [currentScreen, setCurrentScreen] = useState('welcome');
  const [language, setLanguage] = useState('en');

  const handleLanguageSelection = (selectedLang) => {
    setLanguage(selectedLang);
    setCurrentScreen('dashboard');
  };

  const screenProps = {
    language,
    setLanguage,
    onGoHome: () => setCurrentScreen('welcome'),
    onNavigate: (screen) => setCurrentScreen(screen)
  };

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

  return (
    <>
      {currentScreen === 'welcome' && (
        <WelcomeScreen onSelectLanguage={handleLanguageSelection} />
      )}

      {currentScreen === 'dashboard' && (
        <Dashboard {...screenProps} />
      )}

      {currentScreen === 'care-partners' && (
        <CarePartners {...screenProps} />
      )}

      {currentScreen === 'timeline' && (
        <Timeline {...screenProps} />
      )}

      {currentScreen === 'faqs' && (
        <Faqs {...screenProps} />
      )}

      {currentScreen === 'videos' && (
        <Videos {...screenProps} />
      )}
    </>
  );
}

export default App;