import React from 'react';
import Mainimg from '../../assets/imagetwo.jpg';

function Culture () { 
    return ( 
        <div className="culture">   
        <div className="culture__content">
           <div className="culture__text">
                <div className="culture__title"><span></span>JAWA CULTURE</div>
                <div className="culture__subtitle">Our culture here is very friendly to people</div>
                <p>known for his politeness, manners and gentleness. 
                    This becomes a characteristic when they mingle with other tribes and become basic 
                    traits that are passed down by their ancestors.</p>
                <divc className="culture__read"></divc>
            </div>
            <div className="culture__image"> <img src={Mainimg} alt="Firstimg" /></div>
        </div>    
        </div>    
    )
}
export default Culture;