import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faC, faSliders } from '@fortawesome/free-solid-svg-icons';
import './header.css';

const Header = () => {
    const [isIconListVisible, setIconListVisible] = useState(false);

    const toggleIconList = () => {
        setIconListVisible(!isIconListVisible);
    };

    return (
        <nav>
            <div className="header">
                <div className="logo-c">
                    <FontAwesomeIcon icon={faC} flip="vertical" size="2xl"  className="icon-c"/>
                    <FontAwesomeIcon icon={faC} flip="vertical" size="2xl" style={{ color: "#ffffff" }} className="icon-c" />
                </div>   
                <div className="zone-nav">
    <li><a href="#aboutSection" className="lien-nav"> About me</a></li>
    <li><a href="#presentationSection" className="lien-nav"> Présentation</a></li>
    <li><a href="#skillsSection" className="lien-nav"> Skills</a></li>
    <li><a href="#contactSection" className="lien-nav"> Contact</a></li>
</div>


                <div className="icon-header" onClick={toggleIconList}>
                    <div className="icon-slider-header">
                    <FontAwesomeIcon icon={faSliders} className="icon-slider-header" /> 
                    </div>
                    {isIconListVisible && (
                        <div className="zone-liste-icon">  
                            <ul className="liste-icon">
                            <li><a href="" className="lien-nav"> About me</a></li>
                            <li><a href="" className="lien-nav"> Réalisation</a></li>
                            <li><a href="" className="lien-nav"> Skills</a></li>
                            <li><a href="" className="lien-nav"> Contact</a></li>
                        </ul>
                            </div>
                      
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Header;

