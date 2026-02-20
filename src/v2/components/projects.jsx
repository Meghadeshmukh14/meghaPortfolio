import React from "react";

const Projects = ({ theme }) => {
    const projects = [
        { title: 'Spectra One', sub: 'Customer Self-Care Portal', desc: 'User dashboards for payments, service requests, and usage history with PWA support for mobile accessibility.', tags: ['React.js', 'Node.js', 'Express', 'MySQL', 'PWA'], color: theme.accent5 },
        { title: 'FFA Portal', sub: 'Customer Onboarding Portal', desc: 'Complete onboarding workflow including contact management, lead handling, opportunity creation, and CAF management.', tags: ['React.js', 'Node.js', 'Express', 'MySQL', 'PWA'], color: theme.accent4 },
        // { title: 'CAF Document Verification', sub: 'Intelligent OCR System', desc: 'OCR pipeline for CAF document extraction with OpenAI GPT-4o for semantic matching and field verification.', tags: ['Python', 'Flask', 'Tesseract', 'OpenAI'], color: theme.accent3 },
        { title: 'Live Photo Validation API', sub: 'Photo Verification Engine', desc: 'Mechanized photo validation with person detection, frame/angle validation, and background detection.', tags: ['Python', 'Flask', 'Computer Vision', 'OpenAI'], color: theme.accent2 },
        { title: 'n8n MS Teams Automation', sub: 'Sales Training Bot', desc: 'Chatbot environment for sales training with interactive text and voice modules for team-wide practice.', tags: ['n8n', 'MS Teams', 'Graph API', 'OpenAI'], color: theme.accent5 },
    ];
    return (
        <section id='projects' style={{ padding: '70px 16px' }}>
            <div style={{ maxWidth: 1100, margin: '0 auto' }}>
                <div className="fadeUp" style={{ textAlign: 'center', marginBottom: 40 }}>
                    <p style={{ color: theme.accent2, fontSize: 12, fontWeight: 600, marginBottom: 6, textTransform: 'uppercase', letterSpacing: 2 }}>Portfolio</p>
                    <h2 style={{ fontSize: 'clamp(22px,5vw,32px)', fontWeight: 700, color: theme.text }}>Major Projects</h2>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 20 }}>
                    {projects.map((p, i) => (
                        <div key={i} className="fadeUp" style={{ borderRadius: 16, overflow: 'hidden', background: theme.card, border: `1px solid ${theme.cardBorder}`, backdropFilter: 'blur(10px)' }}>
                            <div style={{ height: 4, background: p.color }} />
                            <div style={{ padding: 20 }}>
                                <h3 style={{ fontSize: 18, fontWeight: 600, color: theme.text, marginBottom: 4 }}>{p.title}</h3>
                                <p style={{ fontSize: 13, color: p.color, fontWeight: 500, marginBottom: 10 }}>{p.sub}</p>
                                <p style={{ fontSize: 14, color: theme.textMuted, lineHeight: 1.7, marginBottom: 14 }}>{p.desc}</p>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                                    {p.tags.map((t, ti) => <span key={ti} style={{ padding: '4px 10px', borderRadius: 4, background: `${theme.cardBorder}`, color: theme.textSecondary, fontSize: 12, fontWeight: 500 }}>{t}</span>)}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;