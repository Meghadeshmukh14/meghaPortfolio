import React from "react";

const Footer = ({ theme }) => (
  <footer style={{ padding: '28px 20px', borderTop: `1px solid ${theme.cardBorder}`, textAlign: 'center', position: 'relative', zIndex: 1 }}>
    <p style={{ color: theme.textMuted, fontSize: 12 }}>
      © 2025{' '}
      <span style={{ color: theme.accent1, fontWeight: 700 }}>Megha Deshmukh</span>
      {' '}•{' '}
      <span style={{ color: theme.textMuted }}>Crafted with</span>
      {' '}
      <span style={{ color: theme.accent1 }}>♥</span>
    </p>
  </footer>
);

export default Footer;
