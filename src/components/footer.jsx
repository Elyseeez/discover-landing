import React from 'react';

function Footer () { 
    return (
        <div className="footer">
             <div className="footer__divider"></div>
            <div className="footer__content">
               
              <div className="footer__services">
            <div className="footer__title">Services</div>
            <li href="#">Email Marketing</li>
            <li href="#">Campaigns</li>
            <li href="#">Branding</li>
            <li href="#">Offline</li>
          </div>
          <div className="footer__about">
            <div className="footer__title">About</div>
            <li href="#">Our Story</li>
            <li href="#">Benefits</li>
            <li href="#">Team</li>
            <li href="#">Careers</li>
          </div>
          <div className="footer__help">
            <div className="footer__title">Help</div>
            <li href="#">FAQs</li>
            <li href="#">Contact Us</li>
         
          </div>
          </div>
        </div>

)
}

export default  Footer;