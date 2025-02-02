import { Link } from 'react-router-dom';
import config from '../../../config';

interface UsersDetailProps {
  id?: string;
}

const UsersDetail = ({ id }: UsersDetailProps) => {
  if (!id) return;

  return (
    <>
      ...UsersDetail...#{id}...
      <br />
      <Link to={config.routes.routes.users.path}>Back to list</Link>
    </>
  );
};

export default UsersDetail;
