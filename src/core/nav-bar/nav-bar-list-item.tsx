export interface NavBarListItemProps {
    linkText: string;
    linkDestination: string;
}

function NavBarListItem(props: NavBarListItemProps) {
    return (
        <li className="grow text-center hover:font-bold"><a href="#">{props.linkText}</a></li>
    )
}

export default NavBarListItem;