import React from 'react';

const WavyBackground = ({ theme }) => (
  <div style={{ position: 'fixed', inset: 0, overflow: 'hidden', pointerEvents: 'none', zIndex: 0 }}>
    <svg style={{ position: 'absolute', width: '100%', height: '100%', opacity: 0.5 }} viewBox="0 0 1440 900" preserveAspectRatio="none">
      <defs>
        <linearGradient id="wg1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={theme.accent1} stopOpacity="0.18" />
          <stop offset="100%" stopColor={theme.accent3} stopOpacity="0.05" />
        </linearGradient>
        <linearGradient id="wg2" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={theme.accent3} stopOpacity="0.12" />
          <stop offset="100%" stopColor={theme.accent1} stopOpacity="0.04" />
        </linearGradient>
      </defs>
      <path fill="url(#wg1)" d="M0,300 C150,200 350,400 500,300 C650,200 800,350 1000,280 C1200,210 1350,320 1440,280 L1440,900 L0,900 Z">
        <animate attributeName="d" dur="14s" repeatCount="indefinite" values="
          M0,300 C150,200 350,400 500,300 C650,200 800,350 1000,280 C1200,210 1350,320 1440,280 L1440,900 L0,900 Z;
          M0,350 C150,250 350,350 500,400 C650,450 800,300 1000,350 C1200,400 1350,280 1440,320 L1440,900 L0,900 Z;
          M0,280 C150,350 350,250 500,320 C650,390 800,280 1000,320 C1200,360 1350,250 1440,300 L1440,900 L0,900 Z;
          M0,300 C150,200 350,400 500,300 C650,200 800,350 1000,280 C1200,210 1350,320 1440,280 L1440,900 L0,900 Z" />
      </path>
      <path fill="url(#wg2)" d="M0,500 C200,400 400,550 600,480 C800,410 1000,520 1200,450 C1350,400 1400,480 1440,450 L1440,900 L0,900 Z">
        <animate attributeName="d" dur="18s" repeatCount="indefinite" values="
          M0,500 C200,400 400,550 600,480 C800,410 1000,520 1200,450 C1350,400 1400,480 1440,450 L1440,900 L0,900 Z;
          M0,450 C200,520 400,420 600,500 C800,580 1000,450 1200,520 C1350,560 1400,440 1440,500 L1440,900 L0,900 Z;
          M0,520 C200,450 400,580 600,500 C800,420 1000,550 1200,480 C1350,430 1400,520 1440,480 L1440,900 L0,900 Z;
          M0,500 C200,400 400,550 600,480 C800,410 1000,520 1200,450 C1350,400 1400,480 1440,450 L1440,900 L0,900 Z" />
      </path>
      <ellipse cx="200" cy="150" rx="300" ry="200" fill={theme.wave1} style={{ filter: 'blur(80px)' }}>
        <animate attributeName="cx" dur="22s" repeatCount="indefinite" values="200;450;200" />
        <animate attributeName="cy" dur="16s" repeatCount="indefinite" values="150;260;150" />
      </ellipse>
      <ellipse cx="1200" cy="300" rx="260" ry="180" fill={theme.wave2} style={{ filter: 'blur(70px)' }}>
        <animate attributeName="cx" dur="20s" repeatCount="indefinite" values="1200;980;1200" />
        <animate attributeName="cy" dur="14s" repeatCount="indefinite" values="300;180;300" />
      </ellipse>
    </svg>
  </div>
);

export default WavyBackground;
