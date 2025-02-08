import { useParams } from 'react-router-dom';
import { PageLayout } from '../../components';
import { useDocumentMeta } from '../../helpers';
import { PasswordRecoveryForm } from './PasswordRecoveryForm';
import { NewPasswordForm } from './NewPasswordForm';

const PasswordRecovery = () => {
  const { token } = useParams();

  useDocumentMeta({ title: 'Password recovery' });

  return (
    <PageLayout variant="centered">
      <div>...PasswordRecoveryForm...token:{token}</div>
      {token ? <NewPasswordForm token={token} /> : <PasswordRecoveryForm />}
    </PageLayout>
  );
};

export default PasswordRecovery;
