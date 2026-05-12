import React from "react";

const Experience = ({ theme }) => {
  const exp = [
    {
      role: 'Executive – React & Node.js Developer',
      company: 'Shyam Spectra Pvt Ltd',
      location: 'Gurugram, Haryana',
      period: 'Oct 2023 – Present',
      type: 'Full-time',
      desc: 'Lead full-stack development of enterprise applications using React.js, Node.js, Python, and Flask. Develop RESTful APIs for customer portals and internal tools.',
      current: true,
    },
  ];

  const edu = [
    {
      degree: 'Full Stack Development Certification',
      school: 'Cybrom Technology',
      location: 'Bhopal, MP',
      period: '2022 – 2023',
      grade: null,
      desc: 'Programming languages, and database management. Participated in various coding competitions and hackathons.',
      achievements: ['Best Frontend Project Award'],
    },
    {
      degree: 'Master of Science (Computer Science)',
      school: 'Swami Vivekananda Institute of Technology',
      location: 'Balaghat, MP',
      period: '2020 – 2022',
      grade: '85.38%',
      desc: 'Specialized in Software Engineering and Web Technologies. Active member of coding club and technical fest organizing committee.',
      achievements: ['Class Representative'],
    },
    {
      degree: 'Bachelor of Computer Applications (BCA)',
      school: 'Swami Vivekananda Institute of Technology',
      location: 'Balaghat, MP',
      period: '2017 – 2020',
      grade: 'CGPA 8.04/10',
      desc: 'Foundation in computer science fundamentals, programming languages, and database management.',
      achievements: ['Coding Club Member'],
    },
  ];

  const cardStyle = (border) => ({
    padding: 24, borderRadius: 18,
    background: theme.card,
    border: `1px solid ${border || theme.cardBorder}`,
    backdropFilter: 'blur(20px)',
    transition: 'border-color .3s, box-shadow .3s',
  });

  const hoverOn = (e) => { e.currentTarget.style.borderColor = theme.cardBorderGold; e.currentTarget.style.boxShadow = `0 12px 32px ${theme.accent1}12`; };
  const hoverOff = (e) => { e.currentTarget.style.borderColor = e.currentTarget.getAttribute('data-border') || theme.cardBorder; e.currentTarget.style.boxShadow = 'none'; };

  return (
    <section id='experience' style={{ padding: '90px 20px' }}>
      <div style={{ maxWidth: 900, margin: '0 auto' }}>

        {/* Header */}
        <div className="reveal" style={{ textAlign: 'center', marginBottom: 64 }}>
          <p style={{ color: theme.accent1, fontSize: 11, fontWeight: 700, marginBottom: 12, textTransform: 'uppercase', letterSpacing: 5 }}>Career Journey</p>
          <h2 style={{ fontSize: 'clamp(20px,4vw,32px)', fontWeight: 800, color: theme.text, letterSpacing: -1 }}>
            Experience <span style={{ color: theme.accent1 }}>&</span> Education
          </h2>
          <div style={{ width: 56, height: 2, background: `linear-gradient(90deg,${theme.accent1},transparent)`, margin: '18px auto 0', borderRadius: 2 }} />
        </div>

        {/* Work Experience */}
        <div className="reveal" style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 28 }}>
          <div style={{ width: 36, height: 36, borderRadius: 10, background: `${theme.accent1}15`, border: `1px solid ${theme.accent1}30`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16 }}>💼</div>
          <h3 style={{ fontSize: 15, fontWeight: 700, color: theme.text }}>Work Experience</h3>
          <div style={{ flex: 1, height: 1, background: `linear-gradient(90deg,${theme.cardBorder},transparent)` }} />
        </div>

        <div style={{ position: 'relative', paddingLeft: 28, marginBottom: 52 }}>
          {/* Timeline line */}
          <div style={{ position: 'absolute', left: 8, top: 12, bottom: 12, width: 2, background: `linear-gradient(180deg,${theme.accent1}80,transparent)`, borderRadius: 2 }} />

          {exp.map((e, i) => (
            <div key={i} className={`reveal d${i + 1}`} style={{ position: 'relative', marginBottom: 20 }}>
              {/* Dot */}
              <div style={{
                position: 'absolute', left: -24, top: 22,
                width: 14, height: 14, borderRadius: '50%',
                background: theme.accent1,
                border: `3px solid ${theme.bg}`,
                boxShadow: `0 0 0 2px ${theme.accent1}, 0 0 14px ${theme.accent1}60`,
              }} />

              <div
                data-border={`${theme.accent1}30`}
                style={cardStyle(`${theme.accent1}30`)}
                onMouseEnter={hoverOn}
                onMouseLeave={hoverOff}
              >
                {/* Current badge */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 10, marginBottom: 12 }}>
                  <div>
                    <h4 style={{ fontSize: 14, fontWeight: 700, color: theme.text, marginBottom: 4, letterSpacing: -.2 }}>{e.role}</h4>
                    <p style={{ fontSize: 13, color: theme.accent1, fontWeight: 600, marginBottom: 2 }}>{e.company}</p>
                    <p style={{ fontSize: 12, color: theme.textMuted }}>{e.location}</p>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <span style={{ display: 'inline-block', padding: '5px 14px', borderRadius: 30, background: `${theme.accent1}18`, border: `1px solid ${theme.accent1}30`, color: theme.accent1, fontSize: 12, fontWeight: 600, marginBottom: 4 }}>{e.period}</span>
                    <p style={{ fontSize: 11, color: theme.textMuted, textTransform: 'uppercase', letterSpacing: 1 }}>{e.type}</p>
                  </div>
                </div>
                <p style={{ fontSize: 13, color: theme.textSecondary, lineHeight: 1.8 }}>{e.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Education */}
        <div className="reveal" style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 28 }}>
          <div style={{ width: 36, height: 36, borderRadius: 10, background: `${theme.accent1}15`, border: `1px solid ${theme.accent1}30`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16 }}>🎓</div>
          <h3 style={{ fontSize: 15, fontWeight: 700, color: theme.text }}>Education</h3>
          <div style={{ flex: 1, height: 1, background: `linear-gradient(90deg,${theme.cardBorder},transparent)` }} />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
          {edu.map((e, i) => (
            <div key={i} className={`reveal d${i + 1}`}
              style={cardStyle()}
              onMouseEnter={hoverOn}
              onMouseLeave={hoverOff}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 10, marginBottom: 10 }}>
                <div>
                  <h4 style={{ fontSize: 13, fontWeight: 700, color: theme.text, marginBottom: 4, letterSpacing: -.2 }}>{e.degree}</h4>
                  <p style={{ fontSize: 12, color: theme.accent1, fontWeight: 600, marginBottom: 2 }}>{e.school}</p>
                  <p style={{ fontSize: 11, color: theme.textMuted }}>{e.location}</p>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <span style={{ display: 'inline-block', padding: '4px 12px', borderRadius: 30, background: `${theme.accent1}12`, border: `1px solid ${theme.accent1}20`, color: theme.accent1, fontSize: 12, fontWeight: 600, marginBottom: 4 }}>{e.period}</span>
                  {e.grade && <p style={{ fontSize: 12, color: theme.accent1, fontWeight: 700 }}>{e.grade}</p>}
                </div>
              </div>
              <p style={{ fontSize: 13, color: theme.textSecondary, lineHeight: 1.8, marginBottom: 12 }}>{e.desc}</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                {e.achievements.map((a, ai) => (
                  <span key={ai} style={{ padding: '5px 12px', borderRadius: 6, background: `${theme.accent1}10`, border: `1px solid ${theme.accent1}20`, color: theme.accent1, fontSize: 12, fontWeight: 600 }}>
                    ✦ {a}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Experience;
