import React from 'react';

function Footer() {
    return (
        <footer style={{ backgroundColor: '#000', color: '#fff', padding: '20px', textAlign: 'center' }}>
            <p>&copy; {new Date().getFullYear()} Caravana Fiel Assis</p>
            <p>Desenvolvido por me@gucaciolato.tech</p>
        </footer>
    );
}

export default Footer;
