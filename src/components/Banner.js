const Banner = ({imgBanner, title}) => {
    return (
        <div className={title === undefined ? "banner banner--notsubtitled" : "banner"}>
            <img src={imgBanner} className="banner__img" alt="Paysage de la nature"/>
            {title !== undefined && (
                <h2 className="banner__title">{title}</h2>
            )}
        </div>
    )
}

export default Banner