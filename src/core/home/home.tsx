import Body from '../body/body';
import Header from '../header/header';

function Home() {
  return (
    <div>
      <div className='flex flex-row h-screen'>
        <Header></Header>
        <Body></Body>
      </div>
    </div>
  );
}

export default Home;
