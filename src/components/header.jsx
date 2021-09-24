import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

function Header () { 
    return (
        <div  className="header">
            <div className="container">
                <div className="header__top">
        
            <ul>
                        <li><Link to="/#info-page">Information</Link></li>
                        
            
           
                        <li><Link to="/#about-page">About us</Link></li>
                        <li><Link to="/#culture-page">Culture</Link></li>
                    </ul>
                  
                </div>
            <div className="header__text">
                <div className="header__title"><span></span>explore the Nature Beauty</div>
                <div className="header__subtitle">Discover <br/> Wonderful Indonesia</div>
                <span></span>
            </div>

            </div>
        </div>

    )
}



export default Header;
