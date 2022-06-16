import Banner from '../banner/Banner'
import Header from '../header/Header'
import Card from '../card/Card'
import "./App.css"

const App = () => {
    return (
      <div className="home">
        <Header />
        <main className="main">
          <Banner />
          <section className="main-content">
            <Card />
          </section>
        </main>
      </div>
  )
}

export default App
