import { useAuth0 } from "@auth0/auth0-react";
import Logout from "../components/LogoutButton";
import Login from "../components/LoginButton";


function Header() {
    const { isAuthenticated } = useAuth0();

    return (
        <header>
        <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
            <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Journey</span>
                <div className="flex items-center lg:order-2">
                   {isAuthenticated ? (
                    <Logout />
                   ) : (
                    <Login />
                   )}
                </div>
            </div>
        </nav>
    </header>
    
    )
    }

export default Header;

