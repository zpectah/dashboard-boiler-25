import { Link } from 'react-router-dom';
import { CardContent, Button, Stack } from '@mui/material';
import config from '../../config';
import { Card, PageLayout } from '../../components';
import { useDocumentMeta } from '../../helpers';

const Welcome = () => {
  useDocumentMeta({ title: 'Welcome' });

  return (
    <PageLayout variant="centered">
      <Card
        title="Welcome to dashboard boilerplate"
        content="Vivamus egestas, viverra rhoncus donec  fringilla placerat posuere mi orci, aliquam vehicula pulvinar mauris. Facilisis quis, nam varius interdum urna ullamcorper elit elit, justo dignissim dui vel dolor elit. Condimentum ullamcorper, nunc sollicitudin at sem fusce ante vestibulum quam nisl vel purus, nulla at imperdiet quis"
      >
        <CardContent>
          <Stack direction="row" gap={1}>
            <Button component={Link} to={config.routes.routes.login.path} variant="outlined">
              Login
            </Button>
            <Button component={Link} to={config.routes.routes.registration.path} variant="contained">
              Registration
            </Button>
          </Stack>
        </CardContent>
      </Card>
    </PageLayout>
  );
};

export default Welcome;
