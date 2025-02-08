import { Link } from 'react-router-dom';
import config from '../../config';
import { PageLayout } from '../../components';
import { useDocumentMeta } from '../../helpers';

const Welcome = () => {
  useDocumentMeta({ title: 'Welcome' });

  return (
    <PageLayout variant="centered">
      ...Welcome...
      <div>
        <Link to={config.routes.routes.login.path}>Login</Link>|
        <Link to={config.routes.routes.registration.path}>Registration</Link>
      </div>
    </PageLayout>
  );
};

export default Welcome;
