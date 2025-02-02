import { useParams } from 'react-router-dom';
import { UsersList } from './UsersList';
import { UsersDetail } from './UsersDetail';

const Users = () => {
  const { id } = useParams();

  return (
    <>
      <UsersDetail id={id} />
      <UsersList />
    </>
  );
};

export default Users;
