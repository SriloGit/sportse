import yoga from "../../assets/yoga.png";
import swimming from "../../assets/swimming.png";
import bike from "../../assets/bike.png";
import weight from "../../assets/weight.png";
import { Link } from 'react-router-dom'
import './navleft.css'

function NavLeft(){
    return(
        <div className="navLeft">
              <Link><img src={yoga} alt="yoga" /></Link>
              <Link><img src={swimming} alt="swimming" /></Link>
              <Link><img src={bike} alt="bike" /></Link>
              <Link><img src={weight} alt="weight" /></Link>
              <p>Copyright, SportSee 2020</p>
        </div>
    )
}

export default NavLeft