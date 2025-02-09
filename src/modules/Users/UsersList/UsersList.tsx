import { Link } from 'react-router-dom';
import config from '../../../config';
import { useUsersQuery } from '../../../hooks';
import { Card } from '../../../components';

const UsersList = () => {
  const usersQuery = useUsersQuery();

  return (
    <>
      <Card
        title="Users list"
        content="Vivamus egestas, viverra rhoncus donec  fringilla placerat posuere mi orci, aliquam vehicula pulvinar mauris. Facilisis quis, nam varius interdum urna ullamcorper elit elit, justo dignissim dui vel dolor elit. Condimentum ullamcorper, nunc sollicitudin at sem fusce ante vestibulum quam nisl vel purus, nulla at imperdiet quis"
      />
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
