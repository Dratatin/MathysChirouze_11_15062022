import Banner from '../components/Banner'
import Card from '../components/Card'

const Home = () => {
  return (
    <div className="home">
      <Banner />
      <section className="home__content">
        <Card />
      </section>
    </div>
  )
}

export default Home
