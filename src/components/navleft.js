import yoga from "../assets/yoga.png";
import swimming from "../assets/swimming.png";
import bike from "../assets/bike.png";
import weight from "../assets/weight.png";

function NavLeft(){
    return(
        <div className="navLeft">
              <img src={yoga} alt="yoga" />
              <img src={swimming} alt="swimming" />
              <img src={bike} alt="bike" />
              <img src={weight} alt="weight" />
              <p>Copiryght, SportSee 2020</p>
        </div>
    )
}

export default NavLeft