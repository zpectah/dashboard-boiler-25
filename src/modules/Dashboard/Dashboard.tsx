import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import config from '../../config';

const Dashboard = () => {
  return (
    <>
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
    </>
  );
};

export default Dashboard;
