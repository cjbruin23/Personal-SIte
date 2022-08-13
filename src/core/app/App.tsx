import './App.css';
import Header from '../header/header';
import Body from '../body/body';
import { Route, Routes } from 'react-router-dom';
import Home from '../home/home';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/pages"/>
      </Routes>
    </div>
  );
}

export default App;
