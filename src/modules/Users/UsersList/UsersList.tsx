import { Link } from 'react-router-dom';
import config from '../../../config';
import { useUsersQuery } from '../../../hooks';

const UsersList = () => {
  const usersQuery = useUsersQuery();

  return (
    <>
      ...UsersList...
      <br />
      {usersQuery.data && (
        <div>
          {usersQuery.data.map((item) => (
            <div key={item.id}>
              {item.email} |<Link to={`${config.routes.routes.users.path}/${item.id}`}>Detail</Link>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default UsersList;
