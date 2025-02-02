import { useParams } from 'react-router-dom';
import { ArticlesList } from './ArticlesList';
import { ArticlesDetail } from './ArticlesDetail';

const Articles = () => {
  const { id } = useParams();

  // TODO: Articles context? - why would i need it?

  return (
    <>
      <ArticlesDetail id={id} />
      <ArticlesList />
    </>
  );
};

export default Articles;
