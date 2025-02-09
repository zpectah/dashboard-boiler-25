import { useParams } from 'react-router-dom';
import { CardContent } from '@mui/material';
import { Card, PageLayout } from '../../components';
import { useDocumentMeta } from '../../helpers';
import { PasswordRecoveryForm } from './PasswordRecoveryForm';
import { NewPasswordForm } from './NewPasswordForm';

const PasswordRecovery = () => {
  const { token } = useParams();

  useDocumentMeta({ title: 'Password recovery' });

  return (
    <PageLayout variant="centered">
      <Card title="Lost password">
        <CardContent>{token ? <NewPasswordForm token={token} /> : <PasswordRecoveryForm />}</CardContent>
      </Card>
    </PageLayout>
  );
};

export default PasswordRecovery;
