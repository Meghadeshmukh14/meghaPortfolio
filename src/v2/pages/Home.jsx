import React, { useState, useEffect } from 'react';
import Hero from '../components/hero';
import WavyBackground from '../components/wavyBackground';
import Nav from '../components/common/navBar';
import About from '../components/about';
import Skills from '../components/skills';
import Projects from '../components/projects';
import Experience from '../components/experience';
import Contact from '../components/contact';
import Footer from '../components/common/footer';
import ThemeBtn from '../components/common/themeButton';

const themes = {
  dark: {
    bg: '#080808',
    bgSecondary: '#0f0f0f',
    card: 'rgba(255,255,255,0.04)',
    cardHover: 'rgba(255,255,255,0.08)',
    cardBorder: 'rgba(255,255,255,0.08)',
    cardBorderGold: 'rgba(212,175,55,0.4)',
    text: '#ffffff',
    textSecondary: '#a8a8a8',
    textMuted: '#555555',
    accent1: '#D4AF37',
    accent2: '#F5D35E',
    accent3: '#B8860B',
    accent4: '#FFD700',
    accent5: '#C5A028',
    gold: '#D4AF37',
    goldLight: '#F5D35E',
    goldDark: '#B8860B',
    inputBg: 'rgba(255,255,255,0.05)',
    shadow: 'rgba(0,0,0,0.8)',
    navBg: 'rgba(8,8,8,0.97)',
    wave1: 'rgba(212,175,55,0.07)',
    wave2: 'rgba(212,175,55,0.04)',
  },
  light: {
    bg: '#FAFAF8',
    bgSecondary: '#F3F1EA',
    card: 'rgba(255,255,255,0.85)',
    cardHover: 'rgba(255,255,255,1)',
    cardBorder: 'rgba(0,0,0,0.07)',
    cardBorderGold: 'rgba(184,134,11,0.4)',
    text: '#0a0a0a',
    textSecondary: '#444444',
    textMuted: '#888888',
    accent1: '#9B7A00',
    accent2: '#B8960E',
    accent3: '#7A6000',
    accent4: '#D4AF37',
    accent5: '#A08009',
    gold: '#9B7A00',
    goldLight: '#C5A028',
    goldDark: '#7A6000',
    inputBg: 'rgba(255,255,255,0.9)',
    shadow: 'rgba(0,0,0,0.08)',
    navBg: 'rgba(250,250,248,0.97)',
    wave1: 'rgba(184,134,11,0.07)',
    wave2: 'rgba(184,134,11,0.04)',
  }
};

const GlobalStyles = ({ theme }) => (
  <style dangerouslySetInnerHTML={{
    __html: `
    *{box-sizing:border-box;margin:0;padding:0;font-family:'Inter',-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;font-size-adjust:none}
    body{font-size:13px}
    html{scroll-behavior:smooth}

    @keyframes float{0%,100%{transform:translateY(0)}50%{transform:translateY(-14px)}}
    @keyframes morph{0%,100%{border-radius:60% 40% 30% 70%/60% 30% 70% 40%}50%{border-radius:30% 60% 70% 40%/50% 60% 30% 60%}}
    @keyframes spin{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}
    @keyframes spinR{from{transform:rotate(360deg)}to{transform:rotate(0deg)}}
    @keyframes blink{0%,100%{opacity:1}50%{opacity:0}}
    @keyframes shimmer{0%{background-position:-400% center}100%{background-position:400% center}}
    @keyframes goldGlow{0%,100%{box-shadow:0 0 20px rgba(212,175,55,0.15),0 0 40px rgba(212,175,55,0.05)}50%{box-shadow:0 0 40px rgba(212,175,55,0.4),0 0 80px rgba(212,175,55,0.15)}}
    @keyframes badgePulse{0%,100%{opacity:1}50%{opacity:.85}}
    @keyframes heroEnter{from{opacity:0;transform:translateY(32px)}to{opacity:1;transform:translateY(0)}}
    @keyframes progressFill{from{width:0}to{width:100%}}
    @keyframes dotPulse{0%,100%{transform:scale(1);opacity:1}50%{transform:scale(1.4);opacity:.8}}
    @keyframes scanLine{0%{transform:translateY(-100%)}100%{transform:translateY(200vh)}}

    .reveal{opacity:0;transform:translateY(36px);transition:opacity .8s cubic-bezier(.4,0,.2,1),transform .8s cubic-bezier(.4,0,.2,1)}
    .reveal.vis{opacity:1;transform:translateY(0)}
    .reveal-left{opacity:0;transform:translateX(-36px);transition:opacity .8s cubic-bezier(.4,0,.2,1),transform .8s cubic-bezier(.4,0,.2,1)}
    .reveal-left.vis{opacity:1;transform:translateX(0)}
    .reveal-right{opacity:0;transform:translateX(36px);transition:opacity .8s cubic-bezier(.4,0,.2,1),transform .8s cubic-bezier(.4,0,.2,1)}
    .reveal-right.vis{opacity:1;transform:translateX(0)}
    .reveal-scale{opacity:0;transform:scale(0.88);transition:opacity .8s cubic-bezier(.4,0,.2,1),transform .8s cubic-bezier(.4,0,.2,1)}
    .reveal-scale.vis{opacity:1;transform:scale(1)}

    .d1{transition-delay:.08s!important}
    .d2{transition-delay:.16s!important}
    .d3{transition-delay:.24s!important}
    .d4{transition-delay:.34s!important}
    .d5{transition-delay:.44s!important}
    .d6{transition-delay:.55s!important}

    .float{animation:float 4s ease-in-out infinite}
    .morph{animation:morph 8s ease-in-out infinite}
    .spin{animation:spin 30s linear infinite}
    .spinR{animation:spinR 20s linear infinite}
    .gold-shimmer{background:linear-gradient(90deg,${theme.accent3} 0%,${theme.accent1} 25%,${theme.accent2} 50%,${theme.accent1} 75%,${theme.accent3} 100%);background-size:300% auto;-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;animation:shimmer 5s linear infinite}
    .gold-glow{animation:goldGlow 3s ease-in-out infinite}
    .badge-pulse{animation:badgePulse 2.5s ease-in-out infinite}
    .cursor-blink{animation:blink 1s step-end infinite}

    input::placeholder,textarea::placeholder{color:${theme.textMuted}}
    input,textarea,button{font-family:inherit}
    button{cursor:pointer}
    a{text-decoration:none}

    @media(max-width:768px){.desk{display:none!important}.mob{display:flex!important}}
    @media(max-width:520px){.mob-col{flex-direction:column!important}}

    ::-webkit-scrollbar{width:3px}
    ::-webkit-scrollbar-track{background:transparent}
    ::-webkit-scrollbar-thumb{background:${theme.accent1}50;border-radius:2px}
    ::-webkit-scrollbar-thumb:hover{background:${theme.accent1}}

    section{position:relative;z-index:1}

    .section-divider{width:100%;height:1px;background:linear-gradient(90deg,transparent,${theme.cardBorder},transparent);margin:0 auto}
  `
  }} />
);

export default function Portfolio() {
  const [isDark, setIsDark] = useState(true);
  const [active, setActive] = useState('home');
  const theme = isDark ? themes.dark : themes.light;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('vis'); }),
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );
    const observe = () => {
      document.querySelectorAll('.reveal,.reveal-left,.reveal-right,.reveal-scale')
        .forEach(el => observer.observe(el));
    };
    observe();
    const t = setTimeout(observe, 300);
    return () => { observer.disconnect(); clearTimeout(t); };
  }, []);

  return (
    <div style={{ minHeight: '100vh', background: theme.bg, color: theme.text, transition: 'background .4s,color .4s' }}>
      <GlobalStyles theme={theme} />
      <WavyBackground theme={theme} />
      <Nav active={active} setActive={setActive} theme={theme} isDark={isDark} />
      <Hero theme={theme} isDark={isDark} />
      <div className="section-divider" />
      <About theme={theme} />
      <div className="section-divider" />
      <Skills theme={theme} />
      <div className="section-divider" />
      <Projects theme={theme} />
      <div className="section-divider" />
      <Experience theme={theme} />
      <div className="section-divider" />
      <Contact theme={theme} />
      <Footer theme={theme} />
      <ThemeBtn isDark={isDark} toggle={() => setIsDark(!isDark)} theme={theme} />
    </div>
  );
}
