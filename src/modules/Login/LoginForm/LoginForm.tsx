import { Link } from 'react-router-dom';
import { Button, Stack } from '@mui/material';
import config from '../../../config';
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

      <Stack direction="row" gap={2}>
        <Button type="submit" variant="contained">
          Submit
        </Button>
        <Button component={Link} to={config.routes.routes.password_recovery.path}>
          Lost password
        </Button>
      </Stack>
    </Form>
  );
};

export default LoginForm;
