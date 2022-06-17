import Banner from '../components/Banner'
import Header from '../components/Header'
import Card from '../components/Card'

const Home = () => {
  // fetch('./logements.json')
  //   .then(response => response.json())
  //   .then(json => console.log(json))
  return (
    <div className="home">
      <Header />
      <main className="home__main">
        <Banner />
        <section className="home__main__content">
          <Card />
        </section>
      </main>
    </div>
  )
}

export default Home
