
import {AiOutlineShopping} from "react-icons/ai";
import { Link } from "react-router-dom";
import './Header.css';

function Header() {
  return (
    <div className="header">
           <Link to='/Cart'> <AiOutlineShopping size={65}/></Link>
            </div>
  )
}

export default Header