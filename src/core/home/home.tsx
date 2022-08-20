import BlogHome from '../../features/blog/blog-home';
import PagesHome from '../../features/pages/pages-home/pages-home';
import Body from '../body/body';
import Header from '../header/header';

function Home() {
  return (
    <div>
      <Header></Header>
      <Body></Body>
      <PagesHome></PagesHome>
      <BlogHome></BlogHome>
    </div>
  );
}

export default Home;
