import NavBar from "../nav-bar/nav-bar";
function Header() {
    return (
        <header className='flex flex-col px-2 py-6'>
            <div className='text-center font-headerText text-3xl mb-5'>Colin Bruin</div>
            <div>
                <NavBar></NavBar>
            </div>
        </header>
    )
}

export default Header;