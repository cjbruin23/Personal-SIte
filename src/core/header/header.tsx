import Img from "../../images/rockies.jpg"
import './header.css'

function Header() {
  return (
    <header>
      <img src={Img} id="header-image" alt="header rockies picture"></img>
      <div className='text-center font-headerText text-3xl mb-5'>Colin Bruin</div>
    </header>
  );
}

export default Header;
