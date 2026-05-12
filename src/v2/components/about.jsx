import React, { useRef, useEffect, useState } from "react";

const About = ({ theme }) => {
  const [counts, setCounts] = useState([0, 0, 0]);
  const hasAnimated = useRef(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const targets = [2, 5, 8];
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !hasAnimated.current) {
        hasAnimated.current = true;
        targets.forEach((target, i) => {
          let current = 0;
          const step = target / 45;
          const timer = setInterval(() => {
            current += step;
            if (current >= target) { current = target; clearInterval(timer); }
            setCounts(prev => { const n = [...prev]; n[i] = Math.floor(current); return n; });
          }, 28);
        });
        observer.disconnect();
      }
    }, { threshold: 0.4 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const tags = ['Full Stack Dev', 'AI Integration', 'PWA Development'];

  const stats = [
    { val: counts[0] + '+', label: 'Years Experience', sub: 'Industry' },
    { val: counts[1] + '+', label: 'Projects', sub: 'Delivered' },
    { val: counts[2] + '+', label: 'Technologies', sub: 'Mastered' },
    { val: 'MSc', label: 'Computer', sub: 'Science' },
  ];

  return (
    <section id='about' style={{ padding: '90px 20px' }} ref={sectionRef}>
      <div style={{ maxWidth: 1120, margin: '0 auto' }}>

        {/* Header */}
        <div className="reveal" style={{ textAlign: 'center', marginBottom: 64 }}>
          <p style={{ color: theme.accent1, fontSize: 11, fontWeight: 700, marginBottom: 12, textTransform: 'uppercase', letterSpacing: 5 }}>About Me</p>
          <h2 style={{ fontSize: 'clamp(20px,4vw,32px)', fontWeight: 800, color: theme.text, letterSpacing: -1, lineHeight: 1.1 }}>
            Professional <span style={{ color: theme.accent1 }}>Summary</span>
          </h2>
          <div style={{ width: 56, height: 2, background: `linear-gradient(90deg,${theme.accent1},transparent)`, margin: '18px auto 0', borderRadius: 2 }} />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 28 }}>

          {/* Bio Card */}
          <div className="reveal-left" style={{
            padding: 36, borderRadius: 22, position: 'relative', overflow: 'hidden',
            background: theme.card, border: `1px solid ${theme.cardBorder}`,
            backdropFilter: 'blur(20px)', transition: 'border-color .3s, box-shadow .3s',
          }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = theme.cardBorderGold; e.currentTarget.style.boxShadow = `0 16px 40px ${theme.accent1}12`; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = theme.cardBorder; e.currentTarget.style.boxShadow = 'none'; }}
          >
            {/* Gold left accent line */}
            <div style={{ position: 'absolute', left: 0, top: 28, bottom: 28, width: 3, background: `linear-gradient(180deg,${theme.accent1},${theme.accent3})`, borderRadius: '0 3px 3px 0' }} />

            <p style={{ color: theme.textSecondary, lineHeight: 1.9, fontSize: 13, marginBottom: 18 }}>
              Full-stack developer with <strong style={{ color: theme.accent1 }}>2+ years</strong> of experience building enterprise-grade applications using React.js, Node.js, MySQL, and Python.
            </p>
            <p style={{ color: theme.textSecondary, lineHeight: 1.9, fontSize: 13, marginBottom: 28 }}>
              Proven ability to lead end-to-end product development — from architecture and backend APIs to polished frontend interfaces. Experienced in AI integrations and team mentoring.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {tags.map((t, i) => (
                <span key={i} style={{
                  padding: '7px 16px', borderRadius: 30,
                  background: `${theme.accent1}10`,
                  border: `1px solid ${theme.accent1}22`,
                  color: theme.accent1, fontSize: 12, fontWeight: 600, letterSpacing: .5,
                }}>{t}</span>
              ))}
            </div>
          </div>

          {/* Stats Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 16 }}>
            {stats.map(({ val, label, sub }, i) => (
              <div key={i} className={`reveal d${i + 1}`} style={{
                padding: 24, borderRadius: 18, textAlign: 'center',
                background: theme.card, border: `1px solid ${theme.cardBorder}`,
                backdropFilter: 'blur(20px)', transition: 'border-color .3s, transform .3s, box-shadow .3s', cursor: 'default',
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = theme.cardBorderGold; e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.boxShadow = `0 14px 32px ${theme.accent1}15`; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = theme.cardBorder; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
              >
                <div style={{ fontSize: 26, fontWeight: 800, color: theme.accent1, marginBottom: 6, letterSpacing: -1, lineHeight: 1 }}>{val}</div>
                <div style={{ fontSize: 12, color: theme.text, fontWeight: 600, marginBottom: 2 }}>{label}</div>
                <div style={{ fontSize: 11, color: theme.textMuted, textTransform: 'uppercase', letterSpacing: 1 }}>{sub}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
