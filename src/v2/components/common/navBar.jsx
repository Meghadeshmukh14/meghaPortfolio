import React, { useState, useEffect } from 'react';
import MobileMenu from '../mobileMenu';


const Nav = ({ active, setActive, theme }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const sections = ['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact'];
  useEffect(() => { const f = () => setScrolled(window.scrollY > 50); window.addEventListener('scroll', f); return () => window.removeEventListener('scroll', f) }, []);

  const handleNavClick = (section) => {
    setActive(section);

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
      <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50, padding: scrolled ? '6px 12px' : '12px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', borderRadius: 12, padding: '10px 18px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: theme.navBg, backdropFilter: 'blur(20px)', border: `1px solid ${theme.cardBorder}`, boxShadow: scrolled ? `0 4px 20px ${theme.shadow}` : 'none' }}>
          <div style={{ fontSize: 18, fontWeight: 700, color: theme.accent2 }}>{'Portfolio'}</div>
          <div className="desk" style={{ display: 'flex', gap: 4 }}>
            {sections.map(s => (
              <button key={s} onClick={() => handleNavClick(s.toLowerCase())} style={{ padding: '8px 14px', borderRadius: 8, border: 'none', cursor: 'pointer', background: active === s.toLowerCase() ? theme.accent2 : 'transparent', color: active === s.toLowerCase() ? '#fff' : theme.textSecondary, fontSize: 13, fontWeight: 500, transition: 'all .2s' }}>
                {s}
              </button>
            ))}
          </div>
          <button className="mob" onClick={() => setMenuOpen(true)} style={{ display: 'none', background: 'none', border: 'none', cursor: 'pointer', padding: 6, flexDirection: 'column', gap: 4 }}>
            <div style={{ width: 20, height: 2, background: theme.text, borderRadius: 1 }} /><div style={{ width: 20, height: 2, background: theme.text, borderRadius: 1 }} /><div style={{ width: 14, height: 2, background: theme.text, borderRadius: 1 }} />
          </button>
        </div>
      </nav>
      <MobileMenu open={menuOpen} close={() => setMenuOpen(false)} theme={theme} sections={sections} active={active} setActive={setActive} />
    </>
  );
};

export default Nav