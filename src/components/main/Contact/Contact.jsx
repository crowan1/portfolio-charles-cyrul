import React, { useState } from 'react';
import './Contact.css';
import IMG from '../../../assets/img/boite-au-lettre.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons';

const Contact = () => {
    const [isMessageSent, setMessageSent] = useState(false);
    const [isEmailValid, setEmailValid] = useState(true);

    const handleSubmit = (e) => {
        e.preventDefault();

        const nom = e.target.nom.value;
        const prenom = e.target.prenom.value;
        const email = e.target.email.value;
        const sujet = e.target.sujet.value;
        const message = e.target.message.value;

        if (nom && prenom && validateEmail(email) && sujet && message) {
            setMessageSent(true);
            setEmailValid(true);
            e.target.reset();
        } else {
            setEmailValid(false); 
        }
    };

    const handleDeleteMessage = () => {
        setMessageSent(false);
    };

    function validateEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    return (
        <div className='section-contact'>
            <div className='contact-zone'>
                <h3>Contact</h3>
            </div>
            <div className='H4-contact'>
                <h4>N'hésitez pas à me contacter via ce formulaire, ou par mail ! 😊</h4>
            </div>
            {isMessageSent && (
                <div className='message-envoie-mail'>
                    <p>Votre message a bien été envoyé, merci et à bientôt ! <FontAwesomeIcon icon={faTimesCircle} className='icon-message' onClick={handleDeleteMessage}/></p>
                </div>
            )}
            <div className='container-main-contact'>
                <div className='img-formulaire'>
                    <img src={IMG} alt=" image d'une boite au lettre" className='boite-formulaire' />
                </div>
                <div className='formulaire'>
                    <form onSubmit={handleSubmit}>
                        <div className='form-nom-prenom'>
                            <div className='form-group'>
                                <label htmlFor='nom'>Nom</label>
                                <input type="text" id='nom' name='nom' placeholder="Nom" required />
                            </div>
                            <div className='form-group'>
                                <label htmlFor="prenom">Prénom</label>
                                <input type="text" id='prenom' name='prenom' placeholder="Prénom" required />
                            </div>
                        </div>
                        <div className='form-group'>
                            <label htmlFor="email">Email</label>
                            {!isEmailValid && <p className='email-fail'>Email incorrect</p>}
                            <input type="text" id='email' name='email' placeholder="Email" required />
                        </div>
                        <div className='form-group'>
                            <label htmlFor="sujet">Sujet</label>
                            <input type="text" id='sujet' name='sujet' placeholder="Sujet" required />
                        </div>
                        <div className='form-group'>
                            <label htmlFor="message">Votre message</label>
                            <textarea name="message" id="message" rows="5" placeholder="votre message" required></textarea>
                        </div>
                        <button type='submit'>Envoyer</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact;
