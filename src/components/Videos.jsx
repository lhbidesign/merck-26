// src/components/Videos.jsx
import { useState } from 'react';
import TopNav from './TopNav';
import { videosContent } from '../data/content';
import './Videos.css';

// Reusable SVG Icons
const PlayIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
);

const ArrowRightIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
);

const CloseIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" /></svg>
);

export default function Videos({ language, setLanguage, onGoHome }) {
  const t = videosContent[language];
  const [activeVideo, setActiveVideo] = useState(null);

  return (
    <main className="screen videos-screen">
      <TopNav language={language} setLanguage={setLanguage} onGoHome={onGoHome} title={t.navTitle} />

      <section className="videos-content-wrapper">
        <div className="videos-grid">
          {t.items.map((video) => (
            <button
              key={video.id}
              className="video-card"
              onClick={() => setActiveVideo(video)}
              aria-label={`Play video: ${video.title}`}
            >
              <div className="video-thumbnail-container">
                <img src={video.thumbnail} alt="" className="video-thumbnail-img" />
                <div className="video-play-overlay">
                  <PlayIcon />
                </div>
              </div>

              <div className="video-info">
                <h2>{video.title}</h2>
                <p>{video.duration}</p>
                <div className="watch-now-btn" aria-hidden="true">
                  {t.watchNow} <ArrowRightIcon />
                </div>
              </div>
            </button>
          ))}
        </div>
      </section>

      <footer className="videos-minimal-footer">
        <p>{t.copy}</p>
      </footer>

      {activeVideo && (
        <div className="video-modal-overlay">
          <button
            className="video-close-btn"
            onClick={() => setActiveVideo(null)}
            aria-label="Close Video"
          >
            <CloseIcon />
          </button>

          <video
            className="fullscreen-video-player"
            src={activeVideo.videoUrl}
            controls
            autoPlay
            playsInline
            disablePictureInPicture
            controlsList="nodownload"
          />
        </div>
      )}
    </main>
  );
}