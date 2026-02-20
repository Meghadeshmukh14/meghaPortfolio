// import React, { useState, useEffect } from 'react';


const MobileMenu = ({ open, close, theme, sections, active, setActive }) => {
  const handleNavClick = (section) => {
    setActive(section);
    close();

    const el = document.getElementById(section);
    if (el) {
      el.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <>
      <div onClick={close} style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(5px)', opacity: open ? 1 : 0, visibility: open ? 'visible' : 'hidden', transition: 'all .3s', zIndex: 90 }} />
      <div style={{ position: 'fixed', top: 0, right: 0, width: 260, height: '100%', background: theme.navBg, backdropFilter: 'blur(20px)', transform: open ? 'translateX(0)' : 'translateX(100%)', transition: 'transform .3s', zIndex: 95, padding: '70px 20px 20px', borderLeft: `1px solid ${theme.cardBorder}` }}>
        {sections.map(s => (
          <button key={s} onClick={() => handleNavClick(s.toLowerCase())} style={{ display: 'block', width: '100%', padding: '14px 18px', marginBottom: 6, borderRadius: 8, border: 'none', background: active === s.toLowerCase() ? theme.accent2 : 'transparent', color: active === s.toLowerCase() ? '#fff' : theme.text, fontSize: 15, fontWeight: 500, textAlign: 'left', cursor: 'pointer' }}>
            {s}
          </button>
        ))}
      </div>
    </>
  );
}

export default MobileMenu