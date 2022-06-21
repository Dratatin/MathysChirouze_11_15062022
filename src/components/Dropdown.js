import Arrow from '../assets/arrowdown.svg'
import { useState } from 'react'



const Dropdown = ({title, description}) => {
    const [isExpended, setIsExpended] = useState(false);

    const toogleExpand = () => {
        setIsExpended(!isExpended)
    }

    return (
        <div className="dropdown">
            <div className={isExpended ? "dropdown__button dropdown__button--expanded" : "dropdown__button" } role="button" onClick={toogleExpand}>
                <h3>{title}</h3>
                <img src={Arrow} alt="Arrow icon"/>
            </div>
                {isExpended && (
                    <p className="dropdown__content">{description}</p>
                )}
        </div>
    )
}

export default Dropdown