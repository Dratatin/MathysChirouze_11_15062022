import AboutIMG from '../assets/bannerAbout.png'
import Banner from '../components/Banner'
import Dropdown from '../components/Dropdown'
import AboutData from '../data/about'

const About = () => {
  return (
    <div className="about">
      <Banner imgBanner={AboutIMG}/>
      <section className="about__content">
        {AboutData.map((element) => (
          <Dropdown key={element.id} title={element.title} content={element.text}/>
        ))}
      </section>
    </div>
  )
}

export default About
