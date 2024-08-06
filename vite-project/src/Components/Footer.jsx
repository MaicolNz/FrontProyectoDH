import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px'}}>
      <img src="/public/images/Logos/Logo White.png" alt="" />      
      <ul style={{ listStyle: 'none', display: 'flex', gap: '20px'}}>
        <li> <img src="/public/images/icons/Facebook.svg" alt="" /></li>
        <li><img src="/public/images/icons/Youtube.svg" alt="" /></li>
        <li><img src="/public/images/icons/Twitter.svg" alt="" /></li>
        <li><img src="/public/images/icons/Instagram.svg" alt="" /></li>
      </ul>
      <p>Copyright © 2024. All rights reserved.</p>

      <input type="text" placeholder='Ingrese su email...' style={{width: '300px', height: '20px', borderRadius: '20px', border: 'none', padding: '10px'}} />
      </div>
    </footer>
  );
};

export default Footer;