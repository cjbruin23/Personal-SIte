import { Link } from 'react-router-dom';

export interface NavBarListItemProps {
  linkText: string;
  linkDestination: string;
}

function NavBarListItem(props: NavBarListItemProps) {
  return (
    <li className='grow text-center hover:font-bold mr-8'>
      <Link to={props.linkDestination}>{props.linkText}</Link>
    </li>
  );
}

export default NavBarListItem;
