import 'bootstrap/dist/css/bootstrap.min.css'
import HomePage from '../pages/HomePage'
import PlaceToStay from '../pages/PlaceToStay'
import { useState } from 'react'
import ConnectWalletOverlay from './ConnectWalletOverlay'
import HeaderIcon from '../icons/Header Icon.svg'

function Header() {

  const [switchPage, setSwitchPage] = useState(true)
  const [connect, setConnect] = useState(false)

  return (
    <div className='container-fluid' id='Header-main-container'>

      <div className="container-fluid" id='Header-main-nav-container'>

        <nav className="navbar navbar-expand-lg" id='Header-main-nav'>
          <img src={HeaderIcon} alt="HeaderIcon" id='Header-icon' onClick={() => setSwitchPage(true)} />
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#HeaderContent"
           aria-controls="HeaderContent" aria-expanded="false" aria-label="Toggle navigation" id='Header-toggle-btn'>
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="HeaderContent">

            <ul className="navbar-nav ms-auto">

              <li className="nav-item" id='Header-nav-1' data-toggle="collapse" data-target="#HeaderContent" onClick={() => setSwitchPage(true)}>Home</li>
              <li className="nav-item" id='Header-nav-2' data-toggle="collapse" data-target="#HeaderContent" onClick={() => setSwitchPage(false)}>Place to stay</li>
              <li className="nav-item" id='Header-nav-3' data-toggle="collapse" data-target="#HeaderContent">NFT's</li>
              <li className="nav-item" id='Header-nav-4' data-toggle="collapse" data-target="#HeaderContent">Community</li>
              <li className="nav-item" id='Header-nav-5' data-toggle="collapse" data-target="#HeaderContent" onClick={() => setConnect(true)}>Connect Wallet</li>

            </ul>

          </div>

        </nav>

      </div>

      {connect && (<ConnectWalletOverlay in={connect} out={() => setConnect(false)} />)}

      {switchPage? <HomePage /> : <PlaceToStay />}

    </div>
  )
}

export default Header
