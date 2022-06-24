const Banner = ({imgBanner, title}) => {
    return (
        <div className="banner">
            <img src={imgBanner} alt="Paysage de la nature"/>
            {title !== undefined && (
                <h2>{title}</h2>
            )}
        </div>
    )
}

export default Banner