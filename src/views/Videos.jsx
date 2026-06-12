// src/views/Videos.jsx
import { useState } from 'react';
import { videosContent } from '../data/content';
import './Videos.css';
import { ArrowRightIcon, CloseIcon, PlayIcon } from '../components/Icons';

export default function Videos({ language }) {
  const t = videosContent[language] || videosContent['en'];
  const videoItems = t?.items || [];

  const [activeVideo, setActiveVideo] = useState(null);

  return (
    <>
      <section className="videos-content-wrapper">
        <div className="videos-grid">
          {videoItems.map((video) => (
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
        <div className="video-modal-overlay" role="dialog" aria-modal="true">
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
            crossOrigin="anonymous"
          />
        </div>
      )}
    </>
  );
}