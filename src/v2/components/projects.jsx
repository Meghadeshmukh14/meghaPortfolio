import React from "react";

const Projects = ({ theme }) => {
  const projects = [
    {
      title: 'Spectra One',
      sub: 'Customer Self-Care Portal',
      team: 'Team Size: 2',
      status: 'Ongoing',
      bullets: [
        'Built user dashboards for payments, service requests, usage history, and account management.',
        'Engineered backend APIs enabling real-time data updates and service request tracking.',
        'Refined UI responsiveness and performance through optimized React components.',
        'Added PWA support to improve accessibility for mobile users.',
      ],
      tags: ['React.js', 'Node.js', 'Express.js', 'MySQL', 'PWA'],
      num: '01',
    },
    {
      title: 'FFA Portal',
      sub: 'Customer Onboarding Portal',
      team: 'Team Size: 3',
      status: null,
      bullets: [
        'Architected a complete onboarding workflow including contact management, lead handling, opportunity creation, and CAF management.',
        'Applied modules for meeting scheduling, Wi-Fi plan sharing, negotiation workflows, and discount logic.',
        'Ensured high system reliability and seamless integration with backend services.',
      ],
      tags: ['React.js', 'Node.js', 'Express.js', 'MySQL', 'PWA'],
      num: '02',
    },
    {
      title: 'CAF Document Verification',
      sub: 'Intelligent OCR System',
      team: 'Solo Project',
      status: null,
      bullets: [
        'Built an OCR pipeline for CAF document extraction and validation.',
        'Integrated OpenAI GPT-4o for semantic matching, field verification, and error detection.',
        'Created Flask APIs to connect the OCR engine with the FFA portal.',
        'Reduced manual data validation effort through automation.',
      ],
      tags: ['Python', 'Flask', 'Tesseract OCR', 'OpenAI GPT-4o'],
      num: '03',
    },
    {
      title: 'n8n Automation with MS Teams',
      sub: 'Sales Training Bot',
      team: 'Team Size: 2',
      status: null,
      bullets: [
        'Built a chatbot environment for sales training workflows.',
        'Built interactive text and voice modules to simulate customer scenarios.',
        'Added MS Teams integration to support team-wide practice sessions.',
        'Improved training efficiency and consistency across sales teams.',
      ],
      tags: ['n8n', 'MS Teams', 'Power Automate', 'Graph API'],
      num: '04',
    },
    {
      title: 'WhatsApp Flow Integration',
      sub: 'Third-Party Portal Integration',
      team: 'Team Size: 2',
      status: null,
      bullets: [
        'Developed WhatsApp customer support integration with external third-party portals using Node.js.',
        'Built internal REST APIs to manage communication workflows, message triggers, and support operations.',
        'Established secure node-to-node connectivity between internal systems and third-party platforms.',
        'Handled webhook processing, message delivery tracking, and error handling mechanisms.',
        'Designed scalable backend logic for automated customer interaction and support ticket workflows.',
        'Coordinated with cross-functional teams and third-party providers for integration testing and deployment activities.',
      ],
      tags: ['Node.js', 'REST APIs', 'Webhooks'],
      num: '05',
    },
  ];

  return (
    <section id='projects' style={{ padding: '90px 20px' }}>
      <div style={{ maxWidth: 1120, margin: '0 auto' }}>

        {/* Header */}
        <div className="reveal" style={{ textAlign: 'center', marginBottom: 64 }}>
          <p style={{ color: theme.accent1, fontSize: 11, fontWeight: 700, marginBottom: 12, textTransform: 'uppercase', letterSpacing: 5 }}>Portfolio</p>
          <h2 style={{ fontSize: 'clamp(20px,4vw,32px)', fontWeight: 800, color: theme.text, letterSpacing: -1 }}>
            Major <span style={{ color: theme.accent1 }}>Projects</span>
          </h2>
          <div style={{ width: 56, height: 2, background: `linear-gradient(90deg,${theme.accent1},transparent)`, margin: '18px auto 0', borderRadius: 2 }} />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 22 }}>
          {projects.map((p, i) => (
            <div key={i} className={`reveal d${i + 1}`} style={{
              borderRadius: 22, overflow: 'hidden',
              background: theme.card, border: `1px solid ${theme.cardBorder}`,
              backdropFilter: 'blur(20px)', position: 'relative',
              transition: 'border-color .3s, transform .3s, box-shadow .3s',
            }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = theme.cardBorderGold;
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.boxShadow = `0 20px 48px ${theme.accent1}18`;
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = theme.cardBorder;
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {/* Gold top bar */}
              <div style={{ height: 3, background: `linear-gradient(90deg,${theme.accent1},${theme.accent2})` }} />

              <div style={{ padding: 26 }}>
                {/* Project number + meta */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 14 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <span style={{ fontSize: 11, fontWeight: 700, color: theme.accent1, letterSpacing: 2, textTransform: 'uppercase', opacity: .6 }}>Project</span>
                    {p.status && (
                      <span style={{ fontSize: 10, fontWeight: 700, padding: '2px 8px', borderRadius: 20, background: `${theme.accent4}22`, color: theme.accent4, border: `1px solid ${theme.accent4}50`, letterSpacing: .5 }}>{p.status}</span>
                    )}
                  </div>
                  <span style={{ fontSize: 24, fontWeight: 800, color: theme.accent1, opacity: .12, lineHeight: 1, letterSpacing: -2 }}>{p.num}</span>
                </div>

                <h3 style={{ fontSize: 16, fontWeight: 700, color: theme.text, marginBottom: 4, letterSpacing: -.3 }}>{p.title}</h3>
                <p style={{ fontSize: 12, color: theme.accent1, fontWeight: 600, marginBottom: 6, letterSpacing: .3 }}>{p.sub}</p>
                <p style={{ fontSize: 11, color: theme.textMuted, fontWeight: 500, marginBottom: 14 }}>{p.team}</p>

                {/* Bullet points */}
                <ul style={{ margin: '0 0 16px 0', padding: 0, listStyle: 'none' }}>
                  {p.bullets.map((b, bi) => (
                    <li key={bi} style={{ display: 'flex', gap: 8, marginBottom: 7, alignItems: 'flex-start' }}>
                      <span style={{ color: theme.accent1, fontSize: 10, marginTop: 4, flexShrink: 0 }}>▸</span>
                      <span style={{ fontSize: 12, color: theme.textSecondary, lineHeight: 1.7 }}>{b}</span>
                    </li>
                  ))}
                </ul>

                {/* Tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                  {p.tags.map((t, ti) => (
                    <span key={ti} style={{
                      padding: '5px 12px', borderRadius: 6,
                      background: `${theme.accent1}10`,
                      border: `1px solid ${theme.accent1}20`,
                      color: theme.textSecondary, fontSize: 11, fontWeight: 600, letterSpacing: .3,
                    }}>{t}</span>
                  ))}
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
