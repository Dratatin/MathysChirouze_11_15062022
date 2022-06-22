const Card = ({title, img}) => {
    return (
        <article className="card">
            <img src={img} alt=""/>
            <h2>{title}</h2>
        </article>
    )
}

export default Card