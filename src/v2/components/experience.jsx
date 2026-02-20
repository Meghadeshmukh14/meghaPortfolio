import React from "react";

const Experience = ({ theme }) => {
  const exp = [
    { role: 'Executive – React & Node.js Developer', company: 'Shyam Spectra Pvt Ltd', location: 'Gurugram, Haryana ', period: 'Oct 2023 – Present', type: 'Full-time', desc: 'Lead full-stack development of enterprise applications using React.js, Node.js, Python, and Flask. Develop RESTful APIs for customer portals and internal tools.', current: true, color: theme.accent4 },
    // { role: 'Web Development Intern', company: 'Appwars Technologies Pvt. Ltd.', location: 'Noida, Uttar Pradesh', period: 'May 2021 – Dec 2021', type: 'Internship', desc: 'Gained hands-on experience in full-stack development basics. Built small web projects using JavaScript and PHP. Learned version control with Git and collaborative development workflows.', current: false, color: theme.accent3 },
  ];
  const edu = [
    { degree: 'Master of Science (Computer Science) MSC(cs)', school: 'Swami Vivekanda Institute of Technology', location:  'Balaghat, MP', period: '2020 – 2022', grade: 'Percentage: 85.38%', desc: 'Specialized in Software Engineering and Web Technologies. Active member of coding club and technical fest organizing committee.', achievements: ['Class Representative', 'Best Project Award', 'Organized departmental tech events'], color: theme.accent4 },
    { degree: 'Bachelor of Computer Applications (BCA)', school: 'Swami Vivekanda Institute of Technology', location: 'Balaghat, MP', period: '2017 – 2020', grade: 'CGPA: 8.04/10', desc: 'Foundation in computer science fundamentals, programming languages, and database management. Participated in various coding competitions and hackathons.', achievements: ['Dean\'s List', 'Coding Club Member', '2nd Place in Inter-College Hackathon'], color: theme.accent3 },
  ];
  return (
    <section id='experience' style={{ padding: '70px 16px' }}>
      <div style={{ maxWidth: 900, margin: '0 auto' }}>
        <div className="fadeUp" style={{ textAlign: 'center', marginBottom: 40 }}>
          <p style={{ color: theme.accent2, fontSize: 12, fontWeight: 600, marginBottom: 6, textTransform: 'uppercase', letterSpacing: 2 }}>Career Journey</p>
          <h2 style={{ fontSize: 'clamp(22px,5vw,32px)', fontWeight: 700, color: theme.text }}>Experience & Education</h2>
        </div>

        <h3 style={{ fontSize: 18, fontWeight: 600, color: theme.accent1, marginBottom: 20, display: 'flex', alignItems: 'center', gap: 10 }}>💼 Work Experience</h3>
        <div style={{ position: 'relative', paddingLeft: 24, marginBottom: 40 }}>
          <div style={{ position: 'absolute', left: 6, top: 8, bottom: 8, width: 2, background: `${theme.accent2}30`, borderRadius: 1 }} />
          {exp.map((e, i) => (
            <div key={i} className="fadeUp" style={{ position: 'relative', marginBottom: 20 }}>
              <div style={{ position: 'absolute', left: -24, top: 8, width: 14, height: 14, borderRadius: '50%', background: e.current ? theme.accent4 : theme.card, border: `3px solid ${e.current ? theme.accent4 : theme.accent2}`, boxShadow: e.current ? `0 0 12px ${theme.accent4}50` : 'none' }} />
              <div style={{ padding: 20, borderRadius: 14, background: theme.card, border: `1px solid ${e.current ? theme.accent4 + '40' : theme.cardBorder}`, backdropFilter: 'blur(10px)' }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-start', gap: 10, marginBottom: 10 }}>
                  <div>
                    <h4 style={{ fontSize: 16, fontWeight: 600, color: theme.text, marginBottom: 4 }}>{e.role}</h4>
                    <p style={{ fontSize: 14, color: e.color, fontWeight: 500 }}>{e.company}</p>
                    <p style={{ fontSize: 13, color: theme.textMuted }}>{e.location}</p>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <span style={{ display: 'inline-block', padding: '4px 12px', borderRadius: 20, background: e.current ? `${theme.accent4}20` : theme.cardBorder, color: e.current ? theme.accent4 : theme.textMuted, fontSize: 12, fontWeight: 600, marginBottom: 4 }}>{e.period}</span>
                    <p style={{ fontSize: 12, color: theme.textMuted }}>{e.type}</p>
                  </div>
                </div>
                <p style={{ fontSize: 14, color: theme.textMuted, lineHeight: 1.7 }}>{e.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <h3 style={{ fontSize: 18, fontWeight: 600, color: theme.accent3, marginBottom: 20, display: 'flex', alignItems: 'center', gap: 10 }}>🎓 Education</h3>
        {edu.map((e, i) => (
          <div key={i} className="fadeUp" style={{ padding: 20, borderRadius: 14, background: theme.card, border: `1px solid ${theme.cardBorder}`, marginBottom: 16, backdropFilter: 'blur(10px)' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-start', gap: 10, marginBottom: 12 }}>
              <div>
                <h4 style={{ fontSize: 16, fontWeight: 600, color: theme.text, marginBottom: 4 }}>{e.degree}</h4>
                <p style={{ fontSize: 14, color: e.color, fontWeight: 500 }}>{e.school}</p>
                <p style={{ fontSize: 13, color: theme.textMuted }}>{e.location}</p>
              </div>
              <div style={{ textAlign: 'right' }}>
                <span style={{ display: 'inline-block', padding: '4px 12px', borderRadius: 20, background: `${theme.accent3}15`, color: e.color, fontSize: 12, fontWeight: 600, marginBottom: 4 }}>{e.period}</span>
                <p style={{ fontSize: 13, color: theme.accent2, fontWeight: 600 }}>{e.grade}</p>
              </div>
            </div>
            <p style={{ fontSize: 14, color: theme.textMuted, lineHeight: 1.7, marginBottom: 12 }}>{e.desc}</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
              {e.achievements.map((a, ai) => <span key={ai} style={{ padding: '4px 10px', borderRadius: 4, background: `${theme.accent3}12`, color: e.color, fontSize: 12, fontWeight: 500 }}>🏆 {a}</span>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;