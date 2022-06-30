import HomeIMG from '../assets/bannerHome.png'
import Banner from '../components/Banner'
import Card from '../components/Card'
import { useFetch } from '../services/api'

const Home = () => {
  const { data, isLoading, error } = useFetch("../../logements.json")
  if (error) {
    return <span>Il y a eu un problème</span>
  } else if (isLoading) {
    return <div>Chargement...</div>
  } else {
    return (
      <div className="home">
        <Banner imgBanner={HomeIMG} title={"Chez vous, partout et ailleurs"}/>
        <section className="home__houses">
          <ul className="home__houses__list">
            {data.map((item) => (
              <li key={item.id}>
                  <Card id={item.id} title={item.title} img={item.cover} />
              </li>
            ))}
          </ul>
        </section>
      </div>
    )
  }
}

export default Home
