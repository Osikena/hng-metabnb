import 'bootstrap/dist/css/bootstrap.min.css'
import AdventureComp1 from '../images/AdventureComp 1.png'
import AdventureCompIcon from '../icons/AdventureComp Icon.png'

function AdventureComp(props) {
  return (
    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3" id='AdventureComp-main-col'>

        <div className="container-fluid" id='AdventureComp-main-col-container'>

            <div id='AdventureComp-div-1'>
                <img src={AdventureComp1} alt="AdventureComp1"  id='AdventureCompImage' />
            </div>

            <div id='AdventureComp-div-2'>

                <div id='AdventureComp-subdiv-1'>
                    <p id='AdventureComp-subtext-1'>Desert king</p>
                    <p id='AdventureComp-subtext-2'>2345km away</p>
                    <img src={AdventureCompIcon} alt="AdventureCompIcon" width={100} id='AdventureCompIcon' />
                </div>

                <div id='AdventureComp-subdiv-2'>
                    <p id='AdventureComp-maintext'>1MBT per night</p>
                    <p id='AdventureComp-subtext-2'>available for 2weeks stay</p>
                </div>

            </div>

        </div>
        
    </div>
  )
}

export default AdventureComp
