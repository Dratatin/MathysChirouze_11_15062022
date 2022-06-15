import Banner from '../banner/Banner'
import Header from '../header/Header'
import "./App.css"

const App = () => {
    return (
      <div className="home">
        <Header />
        <main className="content">
          <Banner />
        </main>
      </div>
  )
}

export default App
