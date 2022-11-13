import 'bootstrap/dist/css/bootstrap.min.css'
import Banner from '../components/Banner'
import BelowBanner from '../components/BelowBanner'
import Adventure from '../components/Adventure'
import More from '../components/More'

function HomePage() {
  return (
    <div className='container-fluid' id='HomePage-main-container'>

      <Banner />

      <BelowBanner />

      <Adventure />

      <More />

    </div>
  )
}

export default HomePage
