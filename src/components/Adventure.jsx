import 'bootstrap/dist/css/bootstrap.min.css'
import AdventureComp from './AdventureComp'
// import BannerImage1 from '../images/Banner Image 1.png'


function Adventure() {
  return (
    <div className="container-fluid" id='Adventure-main-container'>

        <h3 id='Adventure-maintext'>Inspiration for your next adventure</h3>

        <div className="row" id='Adventure-main-row'>
            
            <AdventureComp />

            <AdventureComp />

            <AdventureComp />

            <AdventureComp />

            <AdventureComp />

            <AdventureComp />

            <AdventureComp />

            <AdventureComp />

        </div>

    </div>
  )
}

export default Adventure
