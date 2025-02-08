import { Link } from 'react-router-dom';
import config from '../../../config';
import { useArticlesQuery } from '../../../hooks';

const ArticlesList = () => {
  const articlesQuery = useArticlesQuery();

  return (
    <>
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
