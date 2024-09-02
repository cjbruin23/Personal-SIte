import axios from "axios";
import "./App.css";
import Header from "./layouts/Header";
import { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Stories from "./components/Stories";

function App() {
  const { isAuthenticated } = useAuth0();

  useEffect(() => {
    axios({
      method: "get",
      url: import.meta.env.VITE_LOCALHOST_SERVER,
    })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log("error connection to server", err.response);
      });
  }, []);

  return (
    <>
      <Header />

      {isAuthenticated ? <Stories /> : <div></div>}
    </>
  );
}

export default App;
