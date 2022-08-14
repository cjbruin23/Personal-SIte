import NavBarListItem, { NavBarListItemProps } from './nav-bar-list-item';

function NavBar() {
  const linkItems: NavBarListItemProps[] = [
    {
      linkText: 'Home',
      linkDestination: '#',
    },
    {
      linkText: 'Pages',
      linkDestination: 'pages',
    },
    {
      linkText: 'Blog',
      linkDestination: '#',
    },
    {
      linkText: 'Contact',
      linkDestination: '#',
    },
  ];
  return (
    <div id='navbar-container' className='max-w-2xl m-auto'>
      <ul className='flex flex-row'>
        {linkItems.map((listItem: NavBarListItemProps, index: number) => (
          <NavBarListItem
            key={index}
            linkText={listItem.linkText}
            linkDestination={listItem.linkDestination}
          ></NavBarListItem>
        ))}
      </ul>
    </div>
  );
}

export default NavBar;
