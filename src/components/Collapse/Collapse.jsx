import React, { useState } from "react";
import './Collapse.css'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Collapse = ({title, content}) => {
    const [isOpen, setIsOpen] = useState (false)

    const display = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div className="dropdown-open-collapse">
            <div className="title-collapse">
                <h2> {title}</h2>
                <p onClick={display}
                id="icon">
                <FontAwesomeIcon icon={faChevronUp} className={isOpen ? "icon rotate" : "icon"} />
                 </p>
            </div>
            <div className="dropdown-content-collapse">
                {isOpen && <p className="p-collapse"> {content} </p>}

            </div>
        </div>
    )
}

export default Collapse

