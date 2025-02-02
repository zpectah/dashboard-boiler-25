import { Button } from '@mui/material';
import { Form, FormField, TextField } from '../../../components';
import { useLoginForm } from './useLoginForm';
import { ILoginForm } from './schema';

const LoginForm = () => {
  const { form, onSubmit } = useLoginForm();

  return (
    <Form<ILoginForm> form={form} onSubmit={onSubmit}>
      <FormField name="email" field={<TextField type="email" placeholder="Email" />} label="Email" isRequired />
      <FormField
        name="password"
        label="Password"
        field={<TextField type="password" placeholder="Password" />}
        isRequired
      />

      <div>
        <Button type="submit" variant="contained">
          Submit
        </Button>
      </div>
    </Form>
  );
};

export default LoginForm;
