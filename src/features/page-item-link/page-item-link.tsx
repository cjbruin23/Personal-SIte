import { Link } from 'react-router-dom';

type PageLinkProps = {
  title: string;
  imgSrc: string;
  description: string;
  routeLink: number;
};

function PageItemLink(props: PageLinkProps) {
  return (
    <div>
      <Link to={`../page/${props.routeLink.toString()}`}>
        <img src={props.imgSrc}></img>
        <span>{props.title}</span>
        <p>{props.description}</p>
      </Link>
    </div>
  );
}

export default PageItemLink;
