import React from "react";

const Footer = ({ theme }) => {
    
    return (
        <footer style={{ textAlign: 'center', padding: 30, borderTop: `1px solid ${theme.cardBorder}` }}>
            <p style={{ color: theme.textMuted, fontSize: 14 }}>© 2025 <span style={{ color: theme.accent2, fontWeight: 600 }}>Megha Deshmukh</span> • Crafted with ❤️</p>
        </footer>
    );
};

export default Footer;