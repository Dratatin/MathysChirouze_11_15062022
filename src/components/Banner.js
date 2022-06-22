const Banner = ({imgBanner, title}) => {
    return (
        <div className="banner">
            <img src={imgBanner} alt="Paysage de la nature"/>
            {title !== undefined && (
                <h1>{title}</h1>
            )}
        </div>
    )
}

export default Banner