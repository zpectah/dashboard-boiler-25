import { PageLayout } from '../../components';
import { useDocumentMeta } from '../../helpers';
import { LoginForm } from './LoginForm';

const Login = () => {
  useDocumentMeta({ title: 'Login' });

  return (
    <PageLayout variant="centered">
      <div>...Login...</div>
      <LoginForm />
    </PageLayout>
  );
};

export default Login;
