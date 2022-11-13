import 'bootstrap/dist/css/bootstrap.min.css'
import BelowBannerIcon1 from '../icons/BelowBanner Icon 1.svg'
import BelowBannerIcon2 from '../icons/BelowBanner Icon 2.svg'
import BelowBannerIcon3 from '../icons/BelowBanner Icon 3.svg'

function BelowBanner() {
  return (
    <div className="container-fluid" id='BelowBanner-main-container'>

        <div className="row" id='BelowBanner-row'>

            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4" id='BelowBanner-col'>
                <img src={BelowBannerIcon1} alt="BelowBannerIcon3" />
            </div>

            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4" id='BelowBanner-col'>
                <img src={BelowBannerIcon2} alt="BelowBannerIcon2" />
            </div>

            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4" id='BelowBanner-col'>
                <img src={BelowBannerIcon3} alt="BelowBannerIcon3" />
            </div>

        </div>

    </div>
  )
}

export default BelowBanner
