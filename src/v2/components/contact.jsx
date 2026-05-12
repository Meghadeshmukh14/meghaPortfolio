import React, { useState } from 'react';
import Swal from "sweetalert2";
import * as api from '../middleware/apis';

const Contact = ({ theme }) => {
  const [isSending, setIsSending] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const sendMessage = async (e) => {
    e.preventDefault();
    try {
      setIsSending(true);
      const { name, email, subject, message } = formData;
      const data = await api.sendSms({
        to: "+919XXXXXXXXX",
        body: `New contact from ${name} (${email})\nSubject: ${subject}\nMessage: ${message}`
      });
      if (data?.Status === 200) {
        Swal.fire({ toast: true, position: "center", icon: "success", title: "Message sent!", showConfirmButton: false, timer: 2000, timerProgressBar: true });
        setTimeout(() => window.location.reload(), 2500);
      } else {
        Swal.fire({ toast: true, position: "center", icon: "error", title: "Message send failed!", showConfirmButton: false, timer: 2000, timerProgressBar: true });
      }
    } catch (error) {
      Swal.fire({ toast: true, position: "center", icon: "error", title: "Something went wrong!", showConfirmButton: false, timer: 2000, timerProgressBar: true });
      console.error("Error:", error);
    } finally {
      setIsSending(false);
    }
  };

  const inputStyle = (extra = {}) => ({
    padding: '13px 16px', borderRadius: 12, width: '100%',
    background: theme.inputBg,
    border: `1px solid ${theme.cardBorder}`,
    color: theme.text, fontSize: 13, outline: 'none',
    transition: 'border-color .2s, box-shadow .2s',
    ...extra,
  });

  const focusIn = (e) => { e.target.style.borderColor = theme.accent1; e.target.style.boxShadow = `0 0 0 3px ${theme.accent1}15`; };
  const focusOut = (e) => { e.target.style.borderColor = theme.cardBorder; e.target.style.boxShadow = 'none'; };

  return (
    <section id='contact' style={{ padding: '90px 20px' }}>
      <div style={{ maxWidth: 900, margin: '0 auto' }}>

        {/* Header */}
        <div className="reveal" style={{ textAlign: 'center', marginBottom: 64 }}>
          <p style={{ color: theme.accent1, fontSize: 11, fontWeight: 700, marginBottom: 12, textTransform: 'uppercase', letterSpacing: 5 }}>Get In Touch</p>
          <h2 style={{ fontSize: 'clamp(20px,4vw,32px)', fontWeight: 800, color: theme.text, letterSpacing: -1 }}>
            Contact <span style={{ color: theme.accent1 }}>Me</span>
          </h2>
          <div style={{ width: 56, height: 2, background: `linear-gradient(90deg,${theme.accent1},transparent)`, margin: '18px auto 0', borderRadius: 2 }} />
        </div>

        <div className="reveal" style={{ padding: 32, borderRadius: 24, background: theme.card, border: `1px solid ${theme.cardBorder}`, backdropFilter: 'blur(20px)', transition: 'border-color .3s' }}
          onMouseEnter={e => e.currentTarget.style.borderColor = theme.cardBorderGold}
          onMouseLeave={e => e.currentTarget.style.borderColor = theme.cardBorder}
        >
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: 36 }}>

            {/* Left: Info */}
            <div>
              <h3 style={{ fontSize: 17, fontWeight: 700, color: theme.text, marginBottom: 10, letterSpacing: -.4 }}>Let's Connect</h3>
              <p style={{ fontSize: 13, color: theme.textSecondary, marginBottom: 24, lineHeight: 1.8 }}>
                Open to new opportunities and collaborations. Feel free to reach out — I'd love to hear from you.
              </p>

              {[
                { icon: '✉', label: 'Email', value: 'meghadeshmukh1429@gmail.com', href: 'mailto:meghadeshmukh1429@gmail.com' },
                { icon: '⌖', label: 'Location', value: 'Delhi NCR, India', href: null },
              ].map(({ icon, label, value, href }, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 14, padding: 16, marginBottom: 12, borderRadius: 14, background: theme.inputBg, border: `1px solid ${theme.cardBorder}`, transition: 'border-color .2s' }}
                  onMouseEnter={e => e.currentTarget.style.borderColor = theme.cardBorderGold}
                  onMouseLeave={e => e.currentTarget.style.borderColor = theme.cardBorder}
                >
                  <div style={{ width: 40, height: 40, borderRadius: 10, background: `${theme.accent1}12`, border: `1px solid ${theme.accent1}22`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18, flexShrink: 0 }}>{icon}</div>
                  <div>
                    <p style={{ fontSize: 11, color: theme.textMuted, marginBottom: 3, textTransform: 'uppercase', letterSpacing: 1 }}>{label}</p>
                    {href
                      ? <a href={href} style={{ fontSize: 13, color: theme.text, fontWeight: 500, transition: 'color .2s' }} onMouseEnter={e => e.target.style.color = theme.accent1} onMouseLeave={e => e.target.style.color = theme.text}>{value}</a>
                      : <span style={{ fontSize: 13, color: theme.text, fontWeight: 500 }}>{value}</span>
                    }
                  </div>
                </div>
              ))}
            </div>

            {/* Right: Form */}
            <form onSubmit={sendMessage}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                <input
                  name="name" onChange={handleChange} required placeholder="Your Name"
                  style={inputStyle()}
                  onFocus={focusIn} onBlur={focusOut}
                />
                <input
                  name="email" type="email" onChange={handleChange} required placeholder="Your Email"
                  style={inputStyle()}
                  onFocus={focusIn} onBlur={focusOut}
                />
                <input
                  name="subject" onChange={handleChange} required placeholder="Subject"
                  style={inputStyle()}
                  onFocus={focusIn} onBlur={focusOut}
                />
                <textarea
                  name="message" onChange={handleChange} required placeholder="Your Message" rows={4}
                  style={inputStyle({ resize: 'none' })}
                  onFocus={focusIn} onBlur={focusOut}
                />

                <button
                  type="submit"
                  disabled={isSending}
                  className="gold-glow"
                  style={{ padding: '14px', borderRadius: 12, border: 'none', background: `linear-gradient(135deg,${theme.accent1},${theme.accent2})`, color: '#0a0a0a', fontWeight: 700, fontSize: 13, letterSpacing: .3, transition: 'transform .2s', cursor: isSending ? 'not-allowed' : 'pointer', opacity: isSending ? 0.7 : 1 }}
                  onMouseEnter={e => { if (!isSending) e.currentTarget.style.transform = 'translateY(-2px)'; }}
                  onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
                >
                  {isSending ? 'Sending...' : 'Send Message →'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
