import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px' }}>
        <a href="/">
          <img src="/public/images/Logos/Logo White.png" alt="" />
        </a>
        <ul style={{ listStyle: 'none', display: 'flex', gap: '20px' }}>
          <li> <img src="/public/images/icons/Facebook.svg" alt="" /></li>
          <li><img src="/public/images/icons/Youtube.svg" alt="" /></li>
          <li><img src="/public/images/icons/Twitter.svg" alt="" /></li>
          <li><img src="/public/images/icons/Instagram.svg" alt="" /></li>
        </ul>
        <p>Copyright © 2024. All rights reserved.</p>
        <div>
          <input type="text" placeholder='Ingrese su email...' style={{ width: '170px', height: '20px', borderRadius: '20px 0 0 20px', border: 'none', padding: '10px' }} />
          <button style={{ backgroundColor: 'black', color: 'white', width: '120px', height: '40px', borderRadius: '0 20px 20px 0', border: 'none', padding: '10px' }}>Suscribirme</button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;