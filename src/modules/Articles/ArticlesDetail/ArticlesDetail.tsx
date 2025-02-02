import { Link } from 'react-router-dom';
import config from '../../../config';

interface ArticlesDetailProps {
  id?: string;
}

const ArticlesDetail = ({ id }: ArticlesDetailProps) => {
  if (!id) return;

  return (
    <>
      ...ArticlesDetail...#{id}...
      <br />
      <Link to={config.routes.routes.articles.path}>Back to list</Link>
    </>
  );
};

export default ArticlesDetail;
