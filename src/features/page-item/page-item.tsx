import { Fragment } from 'react';
import { useParams } from 'react-router-dom';
import InstagramAPI from '../pages/instagram-api/instagram-api';
import TwitterApi from '../pages/twitter-api/twitter-api';

function PageItem() {
  const params = useParams();
  console.log('params', params);
  return (
    <Fragment>
      <div>Page Item</div>
      {(() => {
        switch (params.id) {
          case '1':
            return <InstagramAPI></InstagramAPI>;
          case '2':
            return <TwitterApi></TwitterApi>
          default:
            return null;
        }
      })()}
    </Fragment>
  );
}

export default PageItem;
