import { useParams } from 'react-router-dom';
import { ViewLayout } from '../../components';
import { UsersList } from './UsersList';
import { UsersDetail } from './UsersDetail';

const Users = () => {
  const { id } = useParams();

  return (
    <ViewLayout meta={{ title: 'Users' }}>
      <UsersDetail id={id} />
      <UsersList />
    </ViewLayout>
  );
};

export default Users;
