import { useFetch } from '../services/api'
import HomeIMG from '../assets/bannerHome.png'
import Banner from '../components/Banner'
import Card from '../components/Card'
import Loader from '../components/Loader'

const Home = () => {
  const { data, isLoading, error } = useFetch("../../logements.json")
  if (error) {
    return <span>Il y a eu un problème</span>
  } else if (isLoading) {
    return <Loader />
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
