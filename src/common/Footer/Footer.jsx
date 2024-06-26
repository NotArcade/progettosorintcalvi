import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className='wrapper'>
        <div className="footer-column">
          <img src="https://www.mcdonalds.it/sites/default/files/styles/compressed/public/quality_stamp/bollo-qualita%CC%80-carne-pollo-italiana.png.webp?itok=4__4479Ong" alt="Logo" />
          <img src="https://www.mcdonalds.it/sites/default/files/styles/compressed/public/quality_stamp/bollo-bacon.png.webp?itok=w31SoZcU" alt="Logo" />
          <img src='https://www.mcdonalds.it/sites/default/files/2021-10/bollo-qualita-carne-bovina-italiana.png'alt = "Logo"/>
          <img src='https://www.mcdonalds.it/sites/default/files/2021-10/bollo-latte.png'alt = "Logo"/>
          <img src='https://www.mcdonalds.it/sites/default/files/2021-10/bollo-uova.png'alt = "Logo"/>
          <img src='https://www.mcdonalds.it/sites/default/files/2021-10/bollo-albicocche.png'alt = "Logo"/>
          <p>Copyright © 2024 McCalvi's. All rights reserved</p>
        </div>
        <div className="footer-column"></div>
        <div className="footer-column">
          <h3>Links</h3>
          <ul>
            <li><a href="#">Clicca qui per tornare su</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;