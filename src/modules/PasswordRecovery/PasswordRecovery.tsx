import { useParams } from 'react-router-dom';
import { OverLayout } from '../../components';
import { useDocumentMeta } from '../../helpers';
import { PasswordRecoveryForm } from './PasswordRecoveryForm';
import { NewPasswordForm } from './NewPasswordForm';

const PasswordRecovery = () => {
  const { token } = useParams();

  useDocumentMeta({ title: 'Password recovery' });

  return (
    <OverLayout>
      <div>...PasswordRecoveryForm...token:{token}</div>
      {token ? <NewPasswordForm token={token} /> : <PasswordRecoveryForm />}
    </OverLayout>
  );
};

export default PasswordRecovery;
