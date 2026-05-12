import React, { useState, useEffect } from 'react';
import MobileMenu from '../mobileMenu';

const Nav = ({ active, setActive, theme, isDark }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const sections = ['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact'];

  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', f);
    return () => window.removeEventListener('scroll', f);
  }, []);

  const handleNavClick = (section) => {
    setActive(section.toLowerCase());
    const el = document.getElementById(section.toLowerCase());
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100, padding: scrolled ? '6px 20px' : '14px 20px', transition: 'padding .3s' }}>
        <div style={{
          maxWidth: 1120, margin: '0 auto',
          borderRadius: 14, padding: '10px 20px',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          background: theme.navBg, backdropFilter: 'blur(24px)',
          border: `1px solid ${scrolled ? theme.cardBorderGold : theme.cardBorder}`,
          boxShadow: scrolled ? `0 4px 30px ${theme.shadow}` : 'none',
          transition: 'border-color .3s, box-shadow .3s',
        }}>
          {/* Logo */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{
              width: 34, height: 34, borderRadius: 9,
              background: `linear-gradient(135deg,${theme.accent1},${theme.accent3})`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 11, fontWeight: 800, color: '#0a0a0a', letterSpacing: .5,
              flexShrink: 0,
            }}>
              MD
            </div>
            <span style={{ fontSize: 14, fontWeight: 700, color: theme.text, letterSpacing: -.3 }}>
              Megha<span style={{ color: theme.accent1 }}>.</span>
            </span>
          </div>

          {/* Desktop nav links */}
          <div className="desk" style={{ display: 'flex', gap: 2 }}>
            {sections.map(s => {
              const isActive = active === s.toLowerCase();
              return (
                <button key={s} onClick={() => handleNavClick(s)} style={{
                  padding: '8px 16px', borderRadius: 9, border: 'none',
                  background: isActive ? `${theme.accent1}18` : 'transparent',
                  color: isActive ? theme.accent1 : theme.textSecondary,
                  fontSize: 12, fontWeight: isActive ? 600 : 500,
                  transition: 'all .2s', position: 'relative',
                  borderBottom: isActive ? `2px solid ${theme.accent1}` : '2px solid transparent',
                }}
                  onMouseEnter={e => { if (!isActive) e.currentTarget.style.color = theme.text; }}
                  onMouseLeave={e => { if (!isActive) e.currentTarget.style.color = theme.textSecondary; }}
                >
                  {s}
                </button>
              );
            })}
          </div>

          {/* Mobile hamburger */}
          <button className="mob" onClick={() => setMenuOpen(true)} style={{
            display: 'none', background: 'none', border: 'none', padding: 6,
            flexDirection: 'column', gap: 5, cursor: 'pointer',
          }}>
            <div style={{ width: 22, height: 2, background: theme.accent1, borderRadius: 1 }} />
            <div style={{ width: 16, height: 2, background: theme.accent1, borderRadius: 1 }} />
            <div style={{ width: 22, height: 2, background: theme.accent1, borderRadius: 1 }} />
          </button>
        </div>
      </nav>
      <MobileMenu open={menuOpen} close={() => setMenuOpen(false)} theme={theme} sections={sections} active={active} setActive={setActive} />
    </>
  );
};

export default Nav;
