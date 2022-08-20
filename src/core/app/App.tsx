import { Route, Routes } from 'react-router-dom';
import PageItem from '../../features/page-item/page-item';
import Home from '../home/home';

function App() {
  return (
    <div id='app'>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/page/:id" element={<PageItem />} />
      </Routes>
    </div>
  );
}

export default App;
