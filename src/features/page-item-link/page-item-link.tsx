import { Link } from 'react-router-dom';

interface PageLinkProps {
  title: string;
  imgSrc: string;
  description: string;
  routeLink: number;
}

function PageItemLink(props: PageLinkProps) {
  return (
    <div>
      // Looks like I may need to use React Context API to pass information about what function to call
      <Link to={`../page/${props.routeLink.toString()}`}>
        <img src={props.imgSrc}></img>
        <span>{props.title}</span>
        <p>{props.description}</p>
      </Link>
    </div>
  );
}

export default PageItemLink;
