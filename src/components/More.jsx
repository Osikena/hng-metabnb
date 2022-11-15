import 'bootstrap/dist/css/bootstrap.min.css'
import MoreImage4 from '../images/More Image 4.png'

function More() {
  return (
    <div className="container-fluid" id='More-main-container'>

        <div className="row" id='More-row'>

            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6" id='More-col-1'>
                <h4 id='More-maintext'>Metabnb NFTs</h4>

                <p id='More-subtext'>Discover our NFT gift cards collection. Loyal <br />
                customers gets amazing gift cards which are <br />
                traded as NFTs. These NFTs gives our cutomer <br />
                access to loads of our exclusive services.</p>

                <button id='More-btn'>Learn More</button>
            </div>

            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6" id='More-col-2'>
              
                <img src={MoreImage4} alt="MoreImage4"  id='MoreImage4' />

            </div>

        </div>
    </div>
  )
}

export default More
