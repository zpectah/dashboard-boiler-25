import { Link } from 'react-router-dom';
import config from '../../../config';
import { useArticlesQuery } from '../../../hooks';
import { Card } from '../../../components';

const ArticlesList = () => {
  const articlesQuery = useArticlesQuery();

  return (
    <>
      <Card
        title="Articles list"
        content="Vivamus egestas, viverra rhoncus donec  fringilla placerat posuere mi orci, aliquam vehicula pulvinar mauris. Facilisis quis, nam varius interdum urna ullamcorper elit elit, justo dignissim dui vel dolor elit. Condimentum ullamcorper, nunc sollicitudin at sem fusce ante vestibulum quam nisl vel purus, nulla at imperdiet quis"
      />
      ...ArticlesList...
      <br />
      <br />
      {articlesQuery.data && (
        <div>
          {articlesQuery.data.map((item) => (
            <div key={item.id}>
              {item.name} |<Link to={`${config.routes.routes.articles.path}/${item.id}`}>Detail</Link>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default ArticlesList;
