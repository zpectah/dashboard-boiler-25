import { OverLayout } from '../../components';
import { useDocumentMeta } from '../../helpers';
import { RegistrationForm } from './RegistrationForm';

const Registration = () => {
  useDocumentMeta({ title: 'Registration' });

  return (
    <OverLayout>
      <div>...Registration...</div>
      <RegistrationForm />
    </OverLayout>
  );
};

export default Registration;
