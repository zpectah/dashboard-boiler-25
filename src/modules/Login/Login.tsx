import { CardContent } from '@mui/material';
import { Card, PageLayout } from '../../components';
import { useDocumentMeta } from '../../helpers';
import { LoginForm } from './LoginForm';

const Login = () => {
  useDocumentMeta({ title: 'Login' });

  return (
    <PageLayout variant="centered">
      <Card title="Login">
        <CardContent>
          <LoginForm />
        </CardContent>
      </Card>
    </PageLayout>
  );
};

export default Login;
