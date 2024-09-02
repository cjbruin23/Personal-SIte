import axios from "axios";
import "./App.css";
import Header from "./layouts/Header";

function App() {
    axios({
        method: 'get',
        url: 'http://localhost:8080'
    }).then(res => {
        console.log("res", res)
    })
 return (
  <Header/>
 )
}

export default App;
