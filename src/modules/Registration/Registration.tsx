import { PageLayout } from '../../components';
import { useDocumentMeta } from '../../helpers';
import { RegistrationForm } from './RegistrationForm';

const Registration = () => {
  useDocumentMeta({ title: 'Registration' });

  return (
    <PageLayout variant="centered">
      <div>...Registration...</div>
      <RegistrationForm />
    </PageLayout>
  );
};

export default Registration;
