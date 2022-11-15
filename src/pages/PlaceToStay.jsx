import 'bootstrap/dist/css/bootstrap.min.css'
import '../pagescss/PlaceToStay.css'
import '../pagesresponsivecss/PlaceToStayResponsive.css'
import AdventureComp from '../components/AdventureComp'
import PlaceToStay1 from '../images/PlaceToStay 1.png'
import PlaceToStay2 from '../images/PlaceToStay 2.png'
import PlaceToStay3 from '../images/PlaceToStay 3.png'
import PlaceToStay4 from '../images/PlaceToStay 4.png'
import PlaceToStay5 from '../images/PlaceToStay 5.png'
import PlaceToStay6 from '../images/PlaceToStay 6.png'
import PlaceToStay7 from '../images/PlaceToStay 7.png'
import PlaceToStay8 from '../images/PlaceToStay 8.png'
import PlaceToStay9 from '../images/PlaceToStay 9.png'
import PlaceToStay10 from '../images/PlaceToStay 10.png'
import PlaceToStay11 from '../images/PlaceToStay 11.png'
import PlaceToStay12 from '../images/PlaceToStay 12.png'
import PlaceToStay13 from '../images/PlaceToStay 13.png'
import PlaceToStay14 from '../images/PlaceToStay 14.png'
import PlaceToStay15 from '../images/PlaceToStay 15.png'
import PlaceToStay16 from '../images/PlaceToStay 16.png'
import PlaceToStayNav from '../components/PlaceToStayNav'

function PlaceToStay() {
  return (
    <div className='container-fluid' id='PlaceToStay-main-container'>

      <PlaceToStayNav />

      <div className="row" id='PlaceToStay-row'>

        <AdventureComp image={PlaceToStay1} />
        
        <AdventureComp image={PlaceToStay2} />

        <AdventureComp image={PlaceToStay3} />

        <AdventureComp image={PlaceToStay4} />

        <AdventureComp image={PlaceToStay5} />

        <AdventureComp image={PlaceToStay6} />

        <AdventureComp image={PlaceToStay7} />

        <AdventureComp image={PlaceToStay8} />

        <AdventureComp image={PlaceToStay9} />

        <AdventureComp image={PlaceToStay10} />

        <AdventureComp image={PlaceToStay11} />

        <AdventureComp image={PlaceToStay12} />

        <AdventureComp image={PlaceToStay13} />

        <AdventureComp image={PlaceToStay14} />

        <AdventureComp image={PlaceToStay15} />

        <AdventureComp image={PlaceToStay16} />
        
      </div>

    </div>
  )
}

export default PlaceToStay
