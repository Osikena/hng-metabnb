import 'bootstrap/dist/css/bootstrap.min.css'
import LocationIcon from '../icons/Location Icon.svg'

function PlaceToStayNav() {
  return (
    <div className="container-fluid" id='PlaceToStayNav-main-container'>

    <nav className="navbar navbar-expand-lg" id='PlaceToStayNav-main-nav'>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#PlaceToStayNavSupportedContent" 
        aria-controls="PlaceToStayNavSupportedContent" aria-expanded="false" aria-label="Toggle navigation" id='PlaceToStayNav-toggle-btn'>
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="PlaceToStayNavSupportedContent">

          <ul className="navbar-nav" id='PlaceToStayNav-nav-list'>

            <li className="nav-item" id='PlaceToStayNav-nav-1'>Resturant</li>
            <li className="nav-item" id='PlaceToStayNav-nav-2'>Cottage</li>
            <li className="nav-item" id='PlaceToStayNav-nav-3'>Castle</li>
            <li className="nav-item" id='PlaceToStayNav-nav-4'>fantast city</li>
            <li className="nav-item" id='PlaceToStayNav-nav-5'>beach</li>
            <li className="nav-item" id='PlaceToStayNav-nav-6'>Carbins</li>
            <li className="nav-item" id='PlaceToStayNav-nav-7'>Off-grid</li>
            <li className="nav-item" id='PlaceToStayNav-nav-8'>Farm</li>
            <li className="nav-item" id='PlaceToStayNav-nav-9'>
                <div id='PlaceToStayNav-nav-9-div1'>
                    <h4 id='PlaceToStayNav-nav-9-text'>Location</h4>
                </div>

                <div id='PlaceToStayNav-nav-9-div2'>
                    <img src={LocationIcon} alt="LocationIcon" height={24} width={24} id='PlaceToStayNav-nav-9-icon' />
                </div>
                
            </li>

          </ul>

        </div>

      </nav>

    </div>
  )
}

export default PlaceToStayNav
