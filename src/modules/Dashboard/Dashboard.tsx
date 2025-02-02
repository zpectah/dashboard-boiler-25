import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import config from '../../config';
import { ViewLayout } from '../../components';

const Dashboard = () => {
  return (
    <ViewLayout meta={{ title: 'Dashboard' }}>
      ...Dashboard...
      <br />
      <Button component={Link} to={config.routes.routes.articles.path} variant="outlined">
        Articles
      </Button>
      <Button component={Link} to={config.routes.routes.payments.path} variant="outlined">
        Payments
      </Button>
      <Button component={Link} to={config.routes.routes.users.path} variant="outlined">
        Users
      </Button>
    </ViewLayout>
  );
};

export default Dashboard;
