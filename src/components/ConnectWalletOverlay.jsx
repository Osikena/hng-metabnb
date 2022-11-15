import 'bootstrap/dist/css/bootstrap.min.css'
import CloseIcon from '../icons/Close.svg'
import SideArrow from '../icons/Side Arrow.svg'
import MetaMask from '../icons/MetaMask.svg'
import Connect from '../icons/Connect.svg'

function ConnectWalletOverlay(props) {
  return (
    <div className="container-fluid" id='ConnectWalletOverlay-main-container'>
        
        <div className="row" id='ConnectWalletOverlay-row'>

            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-3" id='ConnectWalletOverlay-col'></div>

            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6" id='ConnectWalletOverlay-col-main'>

              <div id='ConnectWalletOverlay-main-div-1'>
              
                <div id='ConnectWalletOverlay-div-1'>

                  <div id='ConnectWalletOverlay-div-1-sub-1'>
                    <h4 id='ConnectWalletOverlay-maintext-0'>Connect Wallet</h4>
                  </div>

                  <div id='ConnectWalletOverlay-div-1-sub-2'>
                    <img src={CloseIcon} alt="CloseIcon" onClick={props.out} style={{ cursor: 'pointer'}} />
                  </div>

                </div>
              </div>

              <div id='ConnectWalletOverlay-main-div-2'>

                <h4 id='ConnectWalletOverlay-maintext'>Choose your preferred wallet:</h4>

                <div id='ConnectWalletOverlay-div-2'>

                  <div id='ConnectWalletOverlay-div-2-sub-1'>
                    <img src={MetaMask} alt="MetaMask" />
                  </div>

                  <div id='ConnectWalletOverlay-div-2-sub-2'>
                    <h4 id='ConnectWalletOverlay-subtext'>Metamask</h4>
                  </div>
                  
                  <div id='ConnectWalletOverlay-div-2-sub-3'>
                    <img src={SideArrow} alt="SideArrow" />
                  </div>

                </div>


                <div id='ConnectWalletOverlay-div-3'>

                  <div id='ConnectWalletOverlay-div-3-sub-1'>
                    <img src={Connect} alt="Connect" />
                  </div>

                  <div id='ConnectWalletOverlay-div-3-sub-2'>
                    <h4 id='ConnectWalletOverlay-subtext'>WalletConnect</h4>
                  </div>
                  
                  <div id='ConnectWalletOverlay-div-3-sub-3'>
                    <img src={SideArrow} alt="SideArrow" />
                  </div>

                </div>
                

              </div>


            </div>

            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-3" id='ConnectWalletOverlay-col'></div>

        </div>
    </div>
  )
}

export default ConnectWalletOverlay
