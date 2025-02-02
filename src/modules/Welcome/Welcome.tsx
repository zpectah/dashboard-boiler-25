import { Link } from 'react-router-dom';
import config from '../../config';
import { OverLayout } from '../../components';

const Welcome = () => {
  return (
    <OverLayout>
      ...Welcome...
      <div>
        <Link to={config.routes.routes.login.path}>Login</Link>|
        <Link to={config.routes.routes.registration.path}>Registration</Link>
      </div>
    </OverLayout>
  );
};

export default Welcome;
