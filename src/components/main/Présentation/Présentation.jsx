import './Présentation.css';
import React from 'react';
import IMG from '../../../assets/img/Photo_Charles.png';

function Présentation() {

    return (
        <div className='main-presentation'>
                 <div className='presentation'>
                <h1>
                Bienvenue sur mon site ! <br />
                Charles Cyrul <br />
                Développeur web
                </h1>
            </div>
            <div className='zone-img'>
                <img className='img-moi' src={IMG} alt="Charles Cyrul" />
            </div> 
          
        </div>
    );
}

export default Présentation;
