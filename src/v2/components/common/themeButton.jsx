import React from "react";

const ThemeBtn = ({ isDark, toggle, theme }) => (
  <button
    onClick={toggle}
    title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    style={{
      position: 'fixed', bottom: 24, right: 24,
      width: 48, height: 48, borderRadius: 14, border: `1px solid ${theme ? theme.cardBorderGold : 'rgba(212,175,55,0.4)'}`,
      background: isDark
        ? 'linear-gradient(135deg,#1a1a1a,#0a0a0a)'
        : 'linear-gradient(135deg,#fff,#F3F1EA)',
      cursor: 'pointer', zIndex: 100,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontSize: 18,
      boxShadow: `0 6px 24px rgba(0,0,0,0.35), 0 0 0 1px rgba(212,175,55,0.15)`,
      transition: 'transform .25s, box-shadow .25s',
    }}
    onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.1) translateY(-2px)'; e.currentTarget.style.boxShadow = `0 10px 30px rgba(0,0,0,0.4), 0 0 0 2px rgba(212,175,55,0.35)`; }}
    onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1) translateY(0)'; e.currentTarget.style.boxShadow = `0 6px 24px rgba(0,0,0,0.35), 0 0 0 1px rgba(212,175,55,0.15)`; }}
  >
    {isDark ? '☀️' : '🌙'}
  </button>
);

export default ThemeBtn;
