import React, { useState } from 'react';
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
    bg: '#0a0a0f', card: 'rgba(255,255,255,0.04)', cardBorder: 'rgba(255,255,255,0.1)',
    text: '#fff', textSecondary: '#b4b4b4', textMuted: '#888',
    accent1: '#188c00', accent2: '#8b5cf6', accent3: '#06b6d4', accent4: '#22c55e', accent5: '#dcce11',
    inputBg: 'rgba(255,255,255,0.05)', shadow: 'rgba(0,0,0,0.5)', navBg: 'rgba(10,10,15,0.95)',
    wave1: 'rgba(139,92,246,0.15)', wave2: 'rgba(244,63,94,0.12)',
  },
  light: {
    bg: '#fafafa', card: 'rgba(255,255,255,0)', cardBorder: 'rgba(0,0,0,0.1)',
    text: '#1a1a1a', textSecondary: '#444', textMuted: '#777',
    accent1: '#e11d48', accent2: '#7c3aed', accent3: '#0891b2', accent4: '#16a34a',
    inputBg: '#fff', shadow: 'rgba(0,0,0,0.1)', navBg: 'rgba(250,250,250,0.98)',
    wave1: 'rgba(124,58,237,0.1)', wave2: 'rgba(225,29,72,0.08)',
  }
};

const Styles = ({ theme, isDark }) => (
  <style dangerouslySetInnerHTML={{
    __html: `
    *{box-sizing:border-box;margin:0;padding:0;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif}
    @keyframes float{0%,100%{transform:translateY(0)}50%{transform:translateY(-10px)}}
    @keyframes morph{0%,100%{border-radius:60% 40% 30% 70%/60% 30% 70% 40%}50%{border-radius:30% 60% 70% 40%/50% 60% 30% 60%}}
    @keyframes spin{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}
    @keyframes spinR{from{transform:rotate(360deg)}to{transform:rotate(0deg)}}
    @keyframes fadeUp{from{opacity:0;transform:translateY(25px)}to{opacity:1;transform:translateY(0)}}
    @keyframes bounce{0%,100%{transform:translateY(0)}50%{transform:translateY(-5px)}}
    .float{animation:float 4s ease-in-out infinite}
    .morph{animation:morph 8s ease-in-out infinite}
    .spin{animation:spin 25s linear infinite}
    .spinR{animation:spinR 18s linear infinite}
    .fadeUp{animation:fadeUp .6s ease-out forwards}
    .bounce{animation:bounce 2s ease-in-out infinite}
    input::placeholder,textarea::placeholder{color:${theme.textMuted}}
    @media(max-width:768px){.desk{display:none!important}.mob{display:flex!important}}
  `}} />
);

export default function Portfolio() {
  const [isDark, setIsDark] = useState(true);
  const [active, setActive] = useState('home');
  const theme = isDark ? themes.dark : themes.light;

  return (
    <div style={{ minHeight: '100vh', background: theme.bg, transition: 'background .4s' }}>
      <Styles theme={theme} isDark={isDark} />
      <WavyBackground theme={theme} />
      <Nav active={active} setActive={setActive} theme={theme} />
      <Hero theme={theme} isDark={isDark} />
      <About theme={theme} />
      <Skills theme={theme} />
      <Projects theme={theme} />
      <Experience theme={theme} />
      <Contact theme={theme} />
      <Footer theme={theme} />
      <ThemeBtn isDark={isDark} toggle={() => setIsDark(!isDark)} />
    </div>
  );
}