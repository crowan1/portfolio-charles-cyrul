import React from 'react';
import './Skills.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDatabase, faScrewdriverWrench, faBroadcastTower, faFileCode } from '@fortawesome/free-solid-svg-icons'; 
import { faHtml5, faJs, faReact, faGithub, faFigma } from '@fortawesome/free-brands-svg-icons';

const Skills = () => {
    return (
        <div >
            <h3>Skills</h3>
            <div className='zone-skills'>
                <div className='front-end-skills'>
                    <h4><FontAwesomeIcon icon={faFileCode} /></h4> 
                    <p>Front-end :</p>
                    <ul>
                        <li><FontAwesomeIcon icon={faHtml5} /> Html5 / Css3</li>
                        <li><FontAwesomeIcon icon={faJs} /> JavaScript</li>
                        <li><FontAwesomeIcon icon={faReact} /> React</li>
                    </ul>
                </div>
                <div className='back-end-skills'>
                    <h4><FontAwesomeIcon icon={faDatabase} /></h4>
                    <p>Back-end :</p>
                    <ul>
                        <li>Node.js</li>
                        <li>Express.js</li>
                        <li>MongoDB</li>
                    </ul>
                </div>
                <div className='tools-skills'>
                    <h4><FontAwesomeIcon icon={faScrewdriverWrench} /></h4>
                    <p>Tools : </p>
                    <ul>
                        <li><FontAwesomeIcon icon={faGithub} /> Git / Github</li>
                        <li><FontAwesomeIcon icon={faBroadcastTower} /> Lightouse</li>
                        <li><FontAwesomeIcon icon={faFigma} /> Figma</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Skills;
