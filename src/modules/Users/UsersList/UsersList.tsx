import { Link } from 'react-router-dom';
import config from '../../../config';

const UsersList = () => {
  return (
    <>
      ...UsersList...
      <br />
      <Link to={`${config.routes.routes.users.path}/1`}>Detail 1</Link>
      <Link to={`${config.routes.routes.users.path}/2`}>Detail 2</Link>
      <Link to={`${config.routes.routes.users.path}/3`}>Detail 3</Link>
    </>
  );
};

export default UsersList;
