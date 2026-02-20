import React from "react";

const ThemeBtn = ({ isDark, toggle }) => {
    return (
        <button onClick={toggle} style={{ position: 'fixed', bottom: 20, right: 20, width: 50, height: 50, borderRadius: 12, border: 'none', background: isDark ? 'linear-gradient(135deg,#fbbf24,#f59e0b)' : 'linear-gradient(135deg,#1e1b4b,#4c1d95)', cursor: 'pointer', zIndex: 100, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, boxShadow: '0 4px 20px rgba(0,0,0,0.3)', transition: 'transform .3s' }}>
            {isDark ? '☀️' : '🌙'}
        </button>
    );
};

export default ThemeBtn