import AboutIMG from '../assets/bannerAbout.png'
import Banner from '../components/Banner'

const About = () => {
  return (
    <div className="about">
      <Banner imgBanner={AboutIMG}/>
      <section className="about__content">
        {/* <DropdownDescription /> */}
      </section>
    </div>
  )
}

export default About
