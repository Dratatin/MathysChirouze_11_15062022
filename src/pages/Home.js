import Banner from '../components/Banner'
import Card from '../components/Card'

const Home = () => {
  // fetch('./logements.json')
  //   .then(response => response.json())
  //   .then(json => console.log(json))
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
