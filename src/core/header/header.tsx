import NavBar from "../nav-bar/nav-bar";
function Header() {
    return (
        <header className='flex flex-col px-2 py-6'>
            <div className='text-center font-headerText text-xl'>Colin Bruin</div>
            <div className='text-center'>
                <NavBar></NavBar>
            </div>
        </header>
    )
}

export default Header;