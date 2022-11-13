import 'bootstrap/dist/css/bootstrap.min.css'
import BannerImage1 from '../images/Banner Image 1.png'
import BannerImage2 from '../images/Banner Image 2.png'
import BannerImage3 from '../images/Banner Image 3.png'
import BannerImage4 from '../images/Banner Image 4.png'

function Banner() {
  return (
    <div className="container-fluid" id='Banner-main-container'>

        <div className="row" id='Banner-row'>

            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6" id='Banner-col-1'>
                
                <div id='Banner-div-1'>
                    <h1 id='Banner-div-1-maintext'>Rent a <span id='Banner-div-1-subtext'>Place</span> away from <br />
                    <span id='Banner-div-1-subtext'>Home </span>in the <span id='Banner-div-1-subtext'>Metaverse</span></h1>
                </div>

                <div id='Banner-div-2'>
                    <p  id='Banner-div-2-maintext'>we provide you access to luxury and affordable houses <br />
                    in the metaverse, get a chance to turn your <br />
                    imagination to reality at your comfort zone</p>
                </div>

                <div id='Banner-div-3'>
                    <input type="text" placeholder='Search for location' id='Banner-div-input' />
                    <button id='Banner-div-btn'>Search</button>
                </div>

            </div>

            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-3" id='Banner-col-2'>
                <img src={BannerImage1} alt="BannerImage1" />
                <img src={BannerImage2} alt="BannerImage2" style={{ marginTop: '1vh'}} />
            </div>

            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-3" id='Banner-col-3'>
                <img src={BannerImage3} alt="BannerImage3" />
                <img src={BannerImage4} alt="BannerImage4" style={{ marginTop: '1vh'}}/>
            </div>

        </div>

    </div>
  )
}

export default Banner
