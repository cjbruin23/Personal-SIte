import './header.css';

function Header() {
  return (
    <header id='header' className='flex-initial'>
      <div id='header-container' className='font-headerText mb-5'>
        <div id='header-info' className='ml-7 w-1/2'>
          <h1 className='text-6xl mb-3'>Colin Bruin</h1>
        </div>
      </div>
    </header>
  );
}

export default Header;
