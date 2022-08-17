import { Route, Routes } from 'react-router-dom';
import Home from '../home/home';
import PagesHome from '../../features/pages-home/pages-home';
import PageItem from '../../features/page-item/page-item';
import BlogHome from '../../features/blog/blog-home';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/pages' element={<PagesHome />} />
        <Route path='/page/:id' element={<PageItem />} />
        <Route path='/blog' element={<BlogHome />} />
      </Routes>
    </div>
  );
}

export default App;
