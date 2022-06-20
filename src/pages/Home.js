import HomeIMG from '../assets/bannerHome.png'
import Banner from '../components/Banner'
import Card from '../components/Card'

const Home = () => {
  return (
    <div className="home">
      <Banner imgBanner={HomeIMG} title={"Chez vous, partout et ailleurs"}/>
      <section className="home__content">
        <Card />
      </section>
    </div>
  )
}

export default Home
