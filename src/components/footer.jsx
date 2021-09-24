import React from 'react';
import {Link} from 'react-router-dom';

function Footer () { 
    return (
        <div className="footer">
             <div className="footer__divider"></div>
            <div className="footer__content">
               
              <div className="footer__services">
            <div className="footer__title">Services</div>
            <li href="#"> <Link to="#"> Email Marketing</Link></li>
            <li href="#"><Link to="#"> Campaigns</Link></li>
            <li href="#"><Link to="#"> Branding</Link></li>
            <li href="#"><Link to="#"> Offline</Link></li>
          </div>
          <div className="footer__about">
            <div className="footer__title">About</div>
            <li href="#"><Link to="#"> Our Story</Link></li>
            <li href="#"><Link to="#"> Benefits</Link></li>
            <li href="#"><Link to="#"> Team</Link></li>
            <li href="#"><Link to="#"> Careers</Link></li>
          </div>
          <div className="footer__help">
            <div className="footer__title">Help</div>
            <li href="#"><Link to="#"> FAQs</Link></li>
            <li href="#"><Link to="#"> Contact Us</Link></li>
         
          </div>
          </div>
        </div>

)
}

export default  Footer;