import { Button } from '@mui/material';
import { Form, FormField, TextField } from '../../../components';
import { usePasswordRecoveryForm } from './usePasswordRecoveryForm';
import { IPasswordRecoveryForm } from './schema';

const PasswordRecoveryForm = () => {
  const { form, onSubmit } = usePasswordRecoveryForm();

  return (
    <Form<IPasswordRecoveryForm> form={form} onSubmit={onSubmit}>
      <FormField name="email" field={<TextField type="email" placeholder="Email" />} label="Email" isRequired />

      <input type="hidden" {...form.register('token')} />

      <div>
        <Button type="submit" variant="contained">
          Submit
        </Button>
      </div>
    </Form>
  );
};

export default PasswordRecoveryForm;
