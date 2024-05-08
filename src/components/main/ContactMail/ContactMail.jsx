import './ContactMail.css'
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'; 

const ContactMail = () => {
    return( 
        <div>
            <div>
                <h3>Me contacter</h3>
            </div>
            <div className='zoneContact'>
            <a href="mailto:Charles.cyrul@outlook.fr">
    <FontAwesomeIcon icon={faEnvelope} className='icon' />Charles.cyrul@outlook.fr
</a>
<a href="tel:0650842462">
    <FontAwesomeIcon icon={faPhone} className='icon' />06 50 84 24 62
</a>
            </div> 
        </div>
    );
};

export default ContactMail;
