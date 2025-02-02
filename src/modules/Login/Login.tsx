import { OverLayout } from '../../components';
import { useDocumentMeta } from '../../helpers';
import { LoginForm } from './LoginForm';

const Login = () => {
  useDocumentMeta({ title: 'Login' });

  return (
    <OverLayout>
      <div>...Login...</div>
      <LoginForm />
    </OverLayout>
  );
};

export default Login;
