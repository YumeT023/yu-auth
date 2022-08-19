import React from 'react';
import './assets/css/loading.css';

type LoadingPropType = {
  className: string | null;
}

export function Loading({ className = '' }: LoadingPropType) {
  return (
    <div className={`loading ${className}`}>
      <div className="loading__text">
        <span className="loading__word">L</span>
        <span className="loading__word">O</span>
        <span className="loading__word">A</span>
        <span className="loading__word">D</span>
        <span className="loading__word">I</span>
        <span className="loading__word">N</span>
        <span className="loading__word">G</span>
      </div>
    </div>
  );
}
