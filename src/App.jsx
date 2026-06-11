import { useState } from 'react';
import WelcomeScreen from './components/WelcomeScreen';
import Dashboard from './components/Dashboard';
import CarePartners from './components/CarePartners';

function App() {
  const [currentScreen, setCurrentScreen] = useState('welcome');
  const [language, setLanguage] = useState('en');

  const handleLanguageSelection = (selectedLang) => {
    setLanguage(selectedLang);
    setCurrentScreen('dashboard');
  };

  const handleGoHome = () => {
    setCurrentScreen('welcome');
  };

  return (
    <>
      {currentScreen === 'welcome' && (
        <WelcomeScreen onSelectLanguage={handleLanguageSelection} />
      )}

      {currentScreen === 'dashboard' && (
        <Dashboard
          language={language}
          setLanguage={setLanguage}
          onGoHome={handleGoHome}
          onNavigate={(screen) => setCurrentScreen(screen)}
        />
      )}

      {currentScreen === 'care-partners' && (
        <CarePartners
          language={language}
          setLanguage={setLanguage}
          onGoHome={handleGoHome}
        />
      )}
    </>
  );
}

export default App;