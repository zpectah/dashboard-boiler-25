import { useParams } from 'react-router-dom';
import { ViewLayout } from '../../components';
import { ArticlesList } from './ArticlesList';
import { ArticlesDetail } from './ArticlesDetail';

const Articles = () => {
  const { id } = useParams();

  // TODO: Articles context? - why would i need it?

  return (
    <ViewLayout meta={{ title: 'Articles' }}>
      <ArticlesDetail id={id} />
      <ArticlesList />
    </ViewLayout>
  );
};

export default Articles;
