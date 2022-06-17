import cardImage from '../assets/card.png'

const Card = () => {
    return (
        <article className="card">
            <a className="card__link" href="#">
                <img src={cardImage} alt=""/>
                <h2>Titre de la location</h2>
            </a>
        </article>
    )
}

export default Card