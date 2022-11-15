import 'bootstrap/dist/css/bootstrap.min.css'
import AdventureComp from './AdventureComp'
import AdventureComp1 from '../images/AdventureComp 1.png'
import AdventureComp2 from '../images/AdventureComp 2.png'
import AdventureComp3 from '../images/AdventureComp 3.png'
import AdventureComp4 from '../images/AdventureComp 4.png'
import AdventureComp5 from '../images/AdventureComp 5.png'
import AdventureComp6 from '../images/AdventureComp 6.png'
import AdventureComp7 from '../images/AdventureComp 7.png'
import AdventureComp8 from '../images/AdventureComp 8.png'


function Adventure() {
  return (
    <div className="container-fluid" id='Adventure-main-container'>

        <h3 id='Adventure-maintext'>Inspiration for your next adventure</h3>

        <div className="row" id='Adventure-main-row'>
            
            <AdventureComp image={AdventureComp1} />

            <AdventureComp image={AdventureComp2} />

            <AdventureComp image={AdventureComp3} />

            <AdventureComp image={AdventureComp4} />

            <AdventureComp image={AdventureComp5} />

            <AdventureComp image={AdventureComp6} />

            <AdventureComp image={AdventureComp7} />

            <AdventureComp image={AdventureComp8} />

        </div>

    </div>
  )
}

export default Adventure
