import "./Banner.css"
import bannerBG from '../../assets/bannerBG.png'

const Banner = () => {
    return (
        <div className="banner">
            <img src={bannerBG} alt="Paysage, mers et montagnes"/>
            <h1>Chez vous, partout et ailleurs</h1>
        </div>
    )
}

export default Banner