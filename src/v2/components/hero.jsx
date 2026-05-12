import React, { useState, useEffect } from "react";
import dpOffice from "../assets/images/dp.jpeg";

const Hero = ({ theme, isDark }) => {
  const [displayText, setDisplayText] = useState('');
  const [idx, setIdx] = useState(0);
  const [roleIdx, setRoleIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  const roles = ['Full Stack Developer', 'React.js Expert', 'Node.js Engineer', 'AI Integrations'];

  useEffect(() => {
    const role = roles[roleIdx];
    const speed = deleting ? 48 : 105;
    const t = setTimeout(() => {
      if (!deleting) {
        if (idx < role.length) {
          setDisplayText(role.slice(0, idx + 1));
          setIdx(i => i + 1);
        } else {
          setTimeout(() => setDeleting(true), 2200);
        }
      } else {
        if (idx > 0) {
          setDisplayText(role.slice(0, idx - 1));
          setIdx(i => i - 1);
        } else {
          setDeleting(false);
          setRoleIdx(r => (r + 1) % roles.length);
        }
      }
    }, speed);
    return () => clearTimeout(t);
  }, [idx, deleting, roleIdx]);

  const handleNav = (section) => {
    const el = document.getElementById(section);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const enterCard = (e) => {
    e.currentTarget.style.borderColor = theme.cardBorderGold;
    e.currentTarget.style.transform = 'translateY(-3px)';
    e.currentTarget.style.boxShadow = `0 10px 30px ${theme.accent1}20`;
  };
  const leaveCard = (e) => {
    e.currentTarget.style.borderColor = theme.cardBorder;
    e.currentTarget.style.transform = 'translateY(0)';
    e.currentTarget.style.boxShadow = 'none';
  };

  const anim = (delay) => ({
    animation: `heroEnter .75s cubic-bezier(.4,0,.2,1) ${delay}s both`,
  });

  return (
    <section id='home' style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', padding: '100px 20px 70px' }}>
      <div style={{ maxWidth: 1120, margin: '0 auto', width: '100%', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 64, alignItems: 'center' }}>

        {/* ── Left: Content ── */}
        <div>
          {/* Badge */}
          <div className="badge-pulse" style={{ ...anim(0.1), display: 'inline-flex', alignItems: 'center', gap: 8, padding: '7px 16px', borderRadius: 40, marginBottom: 24, background: `${theme.accent1}12`, border: `1px solid ${theme.accent1}30`, color: theme.accent1, fontSize: 11, fontWeight: 600, backdropFilter: 'blur(10px)' }}>
            <span style={{ width: 7, height: 7, borderRadius: '50%', background: theme.accent4, display: 'inline-block', boxShadow: `0 0 8px ${theme.accent4}` }} />
            Open to Opportunities
          </div>

          {/* Greeting */}
          <p style={{ ...anim(0.2), fontSize: 11, color: theme.textMuted, fontWeight: 600, marginBottom: 8, letterSpacing: 3, textTransform: 'uppercase' }}>
            Hello, I'm
          </p>

          {/* Name */}
          <h1 style={{ ...anim(0.25), fontSize: 'clamp(28px,5.5vw,48px)', fontWeight: 800, lineHeight: 1.05, marginBottom: 16, letterSpacing: -2 }}>
            <span className="gold-shimmer">Megha</span>
            <br />
            <span style={{ color: theme.text }}>Deshmukh</span>
          </h1>

          {/* Typewriter role */}
          <div style={{ ...anim(0.35), display: 'flex', alignItems: 'center', gap: 10, marginBottom: 22, minHeight: 36 }}>
            <span style={{ width: 3, height: 24, background: `linear-gradient(180deg,${theme.accent1},${theme.accent3})`, borderRadius: 2, flexShrink: 0 }} />
            <p style={{ fontSize: 'clamp(14px,2.4vw,18px)', color: theme.accent1, fontWeight: 600, letterSpacing: .3 }}>
              {displayText}
              <span className="cursor-blink" style={{ color: theme.accent2, marginLeft: 1 }}>|</span>
            </p>
          </div>

          {/* Description */}
          <p style={{ ...anim(0.4), color: theme.textSecondary, marginBottom: 28, maxWidth: 450, lineHeight: 1.85, fontSize: 13 }}>
            2+ years building enterprise-grade applications with React.js, Node.js, MySQL, and AI integrations. Proven track record of end-to-end product delivery.
          </p>

          {/* CTA buttons */}
          <div style={{ ...anim(0.48), display: 'flex', gap: 14, flexWrap: 'wrap', marginBottom: 34 }}>
            <button
              onClick={() => handleNav('projects')}
              className="gold-glow"
              style={{ padding: '13px 28px', borderRadius: 10, border: 'none', background: `linear-gradient(135deg,${theme.accent1},${theme.accent2})`, color: '#0a0a0a', fontWeight: 700, fontSize: 12, letterSpacing: .3, transition: 'transform .2s' }}
              onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
            >
              View Projects →
            </button>
            <a href="/Megha_Resume.pdf" download>
              <button
                style={{ padding: '13px 28px', borderRadius: 10, background: 'transparent', border: `1.5px solid ${theme.accent1}50`, color: theme.text, fontWeight: 600, fontSize: 14, transition: 'all .2s', backdropFilter: 'blur(10px)' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = theme.accent1; e.currentTarget.style.background = `${theme.accent1}10`; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = `${theme.accent1}50`; e.currentTarget.style.background = 'transparent'; e.currentTarget.style.transform = 'translateY(0)'; }}
              >
                Download CV
              </button>
            </a>
          </div>

          {/* Contact info */}
          <div style={{ ...anim(0.55), display: 'flex', gap: 16, fontSize: 11, color: theme.textMuted, flexWrap: 'wrap', alignItems: 'center', marginBottom: 22 }}>
            <a href="mailto:meghadeshmukh1429@gmail.com"
              style={{ color: theme.textMuted, display: 'flex', alignItems: 'center', gap: 5, transition: 'color .2s' }}
              onMouseEnter={e => e.currentTarget.style.color = theme.accent1}
              onMouseLeave={e => e.currentTarget.style.color = theme.textMuted}>
              ✉ meghadeshmukh1429@gmail.com
            </a>
            <span style={{ opacity: .25 }}>|</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: 5 }}>⌖ Delhi NCR</span>
          </div>

          {/* Social links */}
          <div style={{ ...anim(0.6), display: 'flex', gap: 10 }}>
            {[
              {
                href: "https://www.linkedin.com/in/megha-deshmukh-20918b252",
                icon: <svg viewBox="0 0 24 24" fill="#0A66C2" style={{ width: 16, height: 16 }}><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
              },
              {
                href: "https://github.com/Meghadeshmukh14",
                icon: <svg viewBox="0 0 24 24" fill={isDark ? '#fff' : '#181717'} style={{ width: 16, height: 16 }}><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" /></svg>
              },
            ].map(({ href, icon }, i) => (
              <a key={i} href={href} target="_blank" rel="noopener noreferrer"
                style={{ width: 40, height: 40, borderRadius: 10, background: theme.card, border: `1px solid ${theme.cardBorder}`, display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all .25s', backdropFilter: 'blur(10px)' }}
                onMouseEnter={enterCard}
                onMouseLeave={leaveCard}>
                {icon}
              </a>
            ))}
          </div>
        </div>

        {/* ── Right: Profile Image ── */}
        <div style={{ ...anim(0.3), display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div style={{ position: 'relative', width: 'min(320px,82vw)' }}>

            {/* Background ambient glow */}
            <div style={{ position: 'absolute', top: '40%', left: '50%', transform: 'translate(-50%,-50%)', width: '150%', height: '150%', background: `radial-gradient(ellipse, ${theme.accent1}18 0%, transparent 65%)`, filter: 'blur(40px)', pointerEvents: 'none', zIndex: 0 }} />

            {/* Shadow / depth card (behind) */}
            <div style={{ position: 'absolute', inset: 0, borderRadius: 24, background: `linear-gradient(135deg,${theme.accent3}30,${theme.accent1}15)`, transform: 'translate(10px,10px)', zIndex: 1, border: `1px solid ${theme.accent1}15` }} />

            {/* Main photo card */}
            <div style={{ position: 'relative', zIndex: 2, borderRadius: 24, overflow: 'hidden', border: `1px solid ${theme.accent1}35`, boxShadow: `0 28px 56px rgba(0,0,0,0.55), 0 0 0 1px ${theme.accent1}10, inset 0 1px 0 ${theme.accent1}20`, transform: 'perspective(900px) rotateY(-4deg) rotateX(1deg)' }}>

              {/* Gold left accent bar */}
              <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 4, background: `linear-gradient(180deg,${theme.accent2},${theme.accent1},${theme.accent3})`, zIndex: 10 }} />

              {/* Photo */}
              <img src={dpOffice} alt="Megha Deshmukh" style={{ width: '100%', display: 'block', aspectRatio: '3/4', objectFit: 'cover', objectPosition: 'center top' }} />

              {/* Bottom glass overlay — code style */}
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '48px 18px 18px', background: 'linear-gradient(to top, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.55) 60%, transparent 100%)' }}>
                <p style={{ fontFamily: 'monospace', color: theme.accent2, fontSize: 10, marginBottom: 3, opacity: .65, letterSpacing: .5 }}>{'const developer = {'}</p>
                <p style={{ fontFamily: 'monospace', color: '#fff', fontSize: 13, fontWeight: 700, paddingLeft: 12, marginBottom: 2, letterSpacing: -.1 }}>
                  name: <span style={{ color: theme.accent2 }}>"Megha Deshmukh"</span>,
                </p>
                <p style={{ fontFamily: 'monospace', color: '#fff', fontSize: 12, paddingLeft: 12, marginBottom: 3 }}>
                  role: <span style={{ color: theme.accent1 }}>"Full Stack Dev"</span>
                </p>
                <p style={{ fontFamily: 'monospace', color: theme.accent2, fontSize: 10, opacity: .65, letterSpacing: .5 }}>{'}'}</p>
              </div>
            </div>

            {/* Floating badge — top right */}
            <div className="float" style={{ position: 'absolute', top: -14, right: -18, zIndex: 5, display: 'flex', alignItems: 'center', gap: 6, padding: '8px 14px', borderRadius: 30, background: `linear-gradient(135deg,${theme.accent1},${theme.accent2})`, color: '#0a0a0a', fontSize: 12, fontWeight: 700, boxShadow: `0 6px 20px ${theme.accent1}50`, animationDelay: '0s' }}>
              <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#0a0a0a', display: 'inline-block' }} />
              Available
            </div>

            {/* Floating badge — bottom left */}
            <div className="float" style={{ position: 'absolute', bottom: 60, left: -22, zIndex: 5, display: 'flex', alignItems: 'center', gap: 7, padding: '9px 14px', borderRadius: 12, background: 'rgba(8,8,8,0.92)', border: `1px solid ${theme.accent1}40`, color: theme.accent1, fontSize: 12, fontWeight: 700, backdropFilter: 'blur(12px)', boxShadow: `0 8px 24px rgba(0,0,0,0.5)`, animationDelay: '1.2s' }}>
              <svg viewBox="0 0 24 24" fill="#61DAFB" style={{ width: 14, height: 14 }}><circle cx="12" cy="12" r="2.2" /><g fill="none" stroke="#61DAFB" strokeWidth="1.2"><ellipse cx="12" cy="12" rx="10" ry="4" /><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" /><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" /></g></svg>
              React.js
            </div>

            {/* Floating badge — mid right */}
            <div className="float" style={{ position: 'absolute', top: '48%', right: -28, zIndex: 5, display: 'flex', alignItems: 'center', gap: 7, padding: '9px 14px', borderRadius: 12, background: 'rgba(8,8,8,0.92)', border: `1px solid ${theme.accent1}40`, color: theme.accent1, fontSize: 12, fontWeight: 700, backdropFilter: 'blur(12px)', boxShadow: `0 8px 24px rgba(0,0,0,0.5)`, animationDelay: '0.6s' }}>
              <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#8CC84B', display: 'inline-block' }} />
              Node.js
            </div>

            {/* XP pill — bottom right */}
            <div style={{ position: 'absolute', bottom: -14, right: 20, zIndex: 5, padding: '7px 16px', borderRadius: 30, background: 'rgba(8,8,8,0.92)', border: `1px solid ${theme.accent1}30`, backdropFilter: 'blur(12px)', boxShadow: `0 6px 20px rgba(0,0,0,0.4)` }}>
              <span style={{ fontSize: 12, fontWeight: 700, color: theme.accent1 }}>2+ yrs</span>
              <span style={{ fontSize: 11, color: theme.textMuted, marginLeft: 4 }}>experience</span>
            </div>

            {/* Decorative dots grid — top left */}
            <div style={{ position: 'absolute', top: -20, left: -20, zIndex: 0, display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', gap: 5, opacity: .25 }}>
              {Array.from({ length: 25 }).map((_, i) => (
                <div key={i} style={{ width: 3, height: 3, borderRadius: '50%', background: theme.accent1 }} />
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
