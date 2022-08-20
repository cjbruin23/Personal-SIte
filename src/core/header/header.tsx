import Img from "../../images/rockies.jpg"

function Header() {
  return (
    <header className=''>
      <img src={Img} alt="header rockies picture"></img>
      <div className='text-center font-headerText text-3xl mb-5'>Colin Bruin</div>
    </header>
  );
}

export default Header;
