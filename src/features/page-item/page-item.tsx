import { Fragment } from "react";
import { useParams } from "react-router-dom";
import InstagramAPI from "../instagram-api/instagram-api";

function PageItem() {
  const params = useParams();
  console.log('params', params)
  return (
      
    <Fragment>
      <div>Page Item</div>
      {(() => {
        switch (params.id) {
          case '1':
            return <InstagramAPI></InstagramAPI>
          
          default:
            return null
        }
      })()}
    </Fragment>
  );
}

export default PageItem;
