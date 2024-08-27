import { useAuth0 } from "@auth0/auth0-react";


function Header() {
    const { loginWithRedirect, isAuthenticated, logout } = useAuth0();

    return (
        <header>
        <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
            <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Journey</span>
                <div className="flex items-center lg:order-2">
                    <a href="#" className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">Log in</a>
                </div>
            </div>
        </nav>
    </header>
    
    )

    if (isAuthenticated) {
      return (
        <button
          onClick={() =>
            logout({ logoutParams: { returnTo: window.location.origin } })
          }
        >
          Log Out
        </button>
      );
    }
    
    return <button onClick={() => loginWithRedirect()}>Log In</button>;
}

export default Header;

