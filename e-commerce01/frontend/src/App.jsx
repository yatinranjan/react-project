// import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Banner from './pages/Banner'
import Category from './pages/Category'
import Hero from './pages/Hero'
import Insta from './pages/Insta'
import Productsgrid from './pages/Productsgrid'
import Reviews from './pages/Reviews'
import Services from './pages/Services'
import Types from './pages/Types'

function App() {

  return (
  <div>
    <Header />
    <Hero />
    <Category />   
    <Types />
    <Services />
    <Productsgrid />
    <Banner />
    <Reviews />
    <Insta />
    <Footer />
  </div>
  )
}

export default App
