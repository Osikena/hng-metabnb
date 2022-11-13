import 'bootstrap/dist/css/bootstrap.min.css'
import FooterIcon1 from '../icons/Footer Icon 1.svg'
import FooterIcon2 from '../icons/Footer Icon 2.svg'
import FooterIcon3 from '../icons/Footer Icon 3.svg'
import FooterIcon4 from '../icons/Footer Icon 4.svg'
import FooterIcon5 from '../icons/Footer Icon 5.svg'

function Footer() {
  return (
    <div className='container-fluid' id='Footer-main-container'>

      <div className="row" id='Footer-row'>

        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3" id='Footer-col-1'>

          <ul id='Footer-unlist-1'>
            <li id='Footer-unlist-1-main'><img src={FooterIcon1} alt="FooterIcon1" /></li>
            <li id='Footer-unlist-1-sub-1'>
              <img src={FooterIcon2} alt="FooterIcon2" />
              <img src={FooterIcon3} alt="FooterIcon3" id='FooterIcon3' />
              <img src={FooterIcon4} alt="FooterIcon4" />
            </li>
            <li id='Footer-unlist-1-sub-2'> <img src={FooterIcon5} alt="FooterIcon5" /></li>
          </ul>

        </div>

        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3" id='Footer-col-2'>

          <ul id='Footer-unlist-2'>
            <li id='Footer-unlist-2-main'>Community</li>
            <li id='Footer-unlist-2-sub'>NFT</li>
            <li id='Footer-unlist-2-sub'>Tokens</li>
            <li id='Footer-unlist-2-sub'>Landlords</li>
            <li id='Footer-unlist-2-sub'>Discord</li>
          </ul>

        </div>

        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3" id='Footer-col-3'>

          <ul id='Footer-unlist-2'>
            <li id='Footer-unlist-2-main'>Places</li>
            <li id='Footer-unlist-2-sub'>Castle</li>
            <li id='Footer-unlist-2-sub'>Farms</li>
            <li id='Footer-unlist-2-sub'>Beach</li>
            <li id='Footer-unlist-2-sub'>Learn more</li>
          </ul>

        </div>

        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3" id='Footer-col-4'>

          <ul id='Footer-unlist-2'>
            <li id='Footer-unlist-2-main'>About us</li>
            <li id='Footer-unlist-2-sub'>Road map</li>
            <li id='Footer-unlist-2-sub'>Creators</li>
            <li id='Footer-unlist-2-sub'>Career</li>
            <li id='Footer-unlist-2-sub'>Contact us</li>
          </ul>

        </div>

      </div>
    </div>
  )
}

export default Footer
