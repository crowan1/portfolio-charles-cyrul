import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'; // Ajout de faLinkedin

const Footer = () => {
    return (
        <footer>
            <div>
            <div className='footer-div-icon'>
                    <a href="https://github.com/crowan1"> <FontAwesomeIcon icon={faGithub} className='icon-github'/></a>
                    <a href="https://www.linkedin.com/in/cyrul/"><FontAwesomeIcon icon={faLinkedin} className='icon-linkedin' /></a> {/* Utilisation de faLinkedin */}
                </div>
                <div className="footer-div-p">
                    <p className="footer-p">Réalisé par Charles Cyrul</p>
                </div>
               
            </div>
        </footer>
    )
}

export default Footer
