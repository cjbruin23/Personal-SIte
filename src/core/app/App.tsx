import { Route, Routes } from 'react-router-dom';
import Home from '../home/home';
import PagesHome from '../../features/pages-home/pages-home';
import PageItem from '../../features/page-item/page-item';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/pages' element={<PagesHome />} />
        <Route path="/page/:id" element={<PageItem />} />
      </Routes>
    </div>
  );
}

export default App;
