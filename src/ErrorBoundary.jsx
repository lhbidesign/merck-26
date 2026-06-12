// src/ErrorBoundary.jsx

import { Component } from 'react';

export default class ErrorBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("Kiosk Error:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="screen error-screen">
          <h1>App Recovery Mode</h1>
          <button className="btn btn-secondary" onClick={() => window.location.reload()}>Tap to Restart</button>
        </div>
      );
    }

    return this.props.children;
  }
}