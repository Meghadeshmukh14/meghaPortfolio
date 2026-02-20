import React from "react";

const About = ({ theme }) => {

    return (
        <section id='about' style={{ padding: '70px 16px' }}>
            <div style={{ maxWidth: 1100, margin: '0 auto' }}>
                <div className="fadeUp" style={{ textAlign: 'center', marginBottom: 40 }}>
                    <p style={{ color: theme.accent2, fontSize: 12, fontWeight: 600, marginBottom: 6, textTransform: 'uppercase', letterSpacing: 2 }}>About Me</p>
                    <h2 style={{ fontSize: 'clamp(22px,5vw,32px)', fontWeight: 700, color: theme.text }}>Professional Summary</h2>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 24 }}>
                    <div className="fadeUp" style={{ padding: 24, borderRadius: 16, background: theme.card, border: `1px solid ${theme.cardBorder}`, backdropFilter: 'blur(10px)' }}>
                        <p style={{ color: theme.textSecondary, lineHeight: 1.8, fontSize: 15, marginBottom: 16 }}>Full-stack developer with <strong style={{ color: theme.accent1 }}>2+ years</strong> experience in React.js, Node.js, MySQL Database , Python and enterprise workflow development.</p>
                        <p style={{ color: theme.textSecondary, lineHeight: 1.8, fontSize: 15, marginBottom: 16 }}>Proven ability to lead end-to-end product development—from architecture and backend APIs to frontend interfaces and deployment. Experience mentoring teams and conducting training sessions.</p>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                            {['Full Stack Dev', 'AI/ML Integration', 'PWA Development'].map((t, i) => <span key={i} style={{ padding: '6px 14px', borderRadius: 6, background: `${theme.accent2}15`, color: theme.accent2, fontSize: 13, fontWeight: 500 }}>{t}</span>)}
                        </div>
                    </div>
                    <div className="fadeUp" style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 16 }}>
                        {[['2+', 'Years Exp', theme.accent1], ['5+', 'Projects', theme.accent2], ['8+', 'Technologies', theme.accent3], ['msc(cs)', 'Degree', theme.accent4]].map(([v, l, c], i) => (
                            <div key={i} style={{ padding: 20, borderRadius: 16, background: theme.card, border: `1px solid ${theme.cardBorder}`, textAlign: 'center', backdropFilter: 'blur(10px)' }}>
                                <div style={{ fontSize: 28, fontWeight: 700, color: c, marginBottom: 4 }}>{v}</div>
                                <div style={{ fontSize: 13, color: theme.textMuted, fontWeight: 500 }}>{l}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;