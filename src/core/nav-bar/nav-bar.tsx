function NavBar() {
    return (
        <div id="navbar-container" className="max-w-2xl m-auto">
            <ul className="flex flex-row">
                <li className="grow"><a href="#">Home</a></li>
                <li className="grow"><a href="#">Pages</a></li>
                <li className="grow"><a href="#">Blog</a></li>
                <li className="grow"><a href="#">Contact</a></li>
            </ul>
        </div>
    )
}

export default NavBar;