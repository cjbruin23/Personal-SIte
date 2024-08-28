import { useAuth0 } from "@auth0/auth0-react"

function Login() {
    const {loginWithRedirect} = useAuth0();
    return (<button className="text-white" onClick={() => loginWithRedirect()}>Log In</button>)
}

export default Login;