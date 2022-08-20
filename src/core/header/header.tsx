import './header.css';

function Header() {
  return (
    <header>
      <div
        id='header-container'
        className='text-center font-headerText mb-5 bg-cover h-screen'
      >
        <div id='header-info' className='m-0 absolute top-2/4 left-2/4'>
          <h1 className='text-white text-6xl mb-3'>Colin Bruin</h1>
          <p className='text-white text-2xl'>
            <i>
              A software engineer with passion for solving difficult problems in the
              web application space. Have worked on large enterprise applications
              with a variety of technologies not limited to: Angular, NodeJS, AWS,
              React, Postgres, DynamoDB, C#, ASP.NET, SQL Server.
            </i>
          </p>
        </div>
      </div>
    </header>
  );
}

export default Header;
