import { CardContent } from '@mui/material';
import { Card, PageLayout } from '../../components';
import { useDocumentMeta } from '../../helpers';
import { RegistrationForm } from './RegistrationForm';

const Registration = () => {
  useDocumentMeta({ title: 'Registration' });

  return (
    <PageLayout variant="centered">
      <Card title="Registration">
        <CardContent>
          <RegistrationForm />
        </CardContent>
      </Card>
    </PageLayout>
  );
};

export default Registration;
