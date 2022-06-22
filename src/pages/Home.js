import HomeIMG from '../assets/bannerHome.png'
import Banner from '../components/Banner'
import Card from '../components/Card'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('./logements.json')
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [])

  return (
    <div className="home">
      <Banner imgBanner={HomeIMG} title={"Chez vous, partout et ailleurs"}/>
      <section className="home__houses">
        <ul className="home__houses__list">
          {data.map((item) => (
            <li key={item.id}>
              <Link to={"/"}>
                <Card title={item.title} img={item.cover} />
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default Home
