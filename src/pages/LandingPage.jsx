import 'bootstrap/dist/css/bootstrap.min.css'
import '../pagescss/LandingPage.css'
import '../pagesresponsivecss/LandingPageResponsive.css'
import Header from '../components/Header'
import HomePage from '../pages/HomePage'
import Footer from '../components/Footer'

function LandingPage() {
  return (
    <div className='container-fluid' id='LandingPage-main-container'>
      
      <Header />

      <HomePage />

      <Footer />

    </div>
  )
}

export default LandingPage
