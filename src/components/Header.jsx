import 'bootstrap/dist/css/bootstrap.min.css'
import HomePage from '../pages/HomePage'
import PlaceToStay from '../pages/PlaceToStay'
import { useState } from 'react'

function Header() {

  const [switchPage, setSwitchPage] = useState(true)

  return (
    <div className='container-fluid' id='Header-main-container'>
      <h2 onClick={() => setSwitchPage(false)}>Header</h2>
      <h2 onClick={() => setSwitchPage(true)}>Header Out</h2>

      {switchPage? <HomePage /> : <PlaceToStay />}

    </div>
  )
}

export default Header
