import bannerHome from '../assets/bannerHome.png'

const Banner = () => {
    return (
        <div className="banner">
            <img src={bannerHome} alt="Paysage, mers et montagnes"/>
            <h1>Chez vous, partout et ailleurs</h1>
        </div>
    )
}

export default Banner