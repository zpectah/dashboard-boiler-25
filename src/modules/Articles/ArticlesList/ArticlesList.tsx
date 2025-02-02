import { Link } from 'react-router-dom';
import config from '../../../config';
import { useArticlesQuery } from '../../../hooks';

const ArticlesList = () => {
  const articlesQuery = useArticlesQuery();

  return (
    <>
      ...ArticlesList...
      <br />
      <Link to={`${config.routes.routes.articles.path}/1`}>Detail 1</Link>
      <Link to={`${config.routes.routes.articles.path}/2`}>Detail 2</Link>
      <Link to={`${config.routes.routes.articles.path}/3`}>Detail 3</Link>
      <br />
      {articlesQuery.data && (
        <>
          {articlesQuery.data.map((item) => (
            <div key={item.id}>{item.name}</div>
          ))}
        </>
      )}
    </>
  );
};

export default ArticlesList;
