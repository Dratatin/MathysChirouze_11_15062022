import Arrow from '../assets/arrowdown.svg'
import { useState } from 'react'



const Dropdown = ({title, content}) => {
    const [isExpended, setIsExpended] = useState(false);

    const toogleExpand = () => {
        setIsExpended(!isExpended)
    }

    return (
        <div className="dropdown">
            <div className={isExpended ? "dropdown__button dropdown__button--expanded" : "dropdown__button" } role="button" onClick={toogleExpand}>
                <h3 className="dropdown__button__title">{title}</h3>
                <img src={Arrow} alt="Arrow icon"/>
            </div>
                {isExpended && (typeof content === "string") && (
                    <p className="dropdown__content">{content}</p>
                )}
                {isExpended && (typeof content === "object") && (
                    <ul className="dropdown__content">
                    {content.map((equipement) => (
                        <li key={equipement}>{equipement}</li>
                    ))}
                    </ul>
                )}
        </div>
    )
}

export default Dropdown