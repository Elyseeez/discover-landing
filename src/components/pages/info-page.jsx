import React from  'react';
import Mainimg from '../../assets/imageone.jpg';

function Info () { 
    return (       
        <div className="info" id="info-page">   
        <div className="info__content">
            <div className="info__image"> <img src={Mainimg} alt="Firstimg" /></div>

            <div className="info__text">
                <div className="info__title"><span></span>EAST nUSA TENGGARA</div>
                <div className="info__subtitle">Have you enjoyed your holiday?</div>
                <p>You will be amazed if you take part in this sailing Komodo island tour package. 
                    So it is also mandatory for you, besides enjoying Komodo tourism on Komodo Island, 
                    you also have to taste the marine tourism.  The beautiful waters of Komodo will make you meet 
                    many travelers from other countries.</p>
                <div className="info__read"></div>
            </div>

        </div>    
        </div>          
    )



}

export default Info;