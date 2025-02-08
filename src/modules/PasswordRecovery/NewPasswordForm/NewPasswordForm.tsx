import { Button } from '@mui/material';
import { Form, FormField, TextField } from '../../../components';
import { useNewPasswordForm } from './useNewPasswordForm';
import { INewPasswordForm } from './schema';

interface NewPasswordFormProps {
  token?: string;
}

const NewPasswordForm = ({ token }: NewPasswordFormProps) => {
  const { form, onSubmit } = useNewPasswordForm();

  return (
    <Form<INewPasswordForm> form={form} onSubmit={onSubmit}>
      <FormField
        name="email"
        field={<TextField type="email" placeholder="Email" slotProps={{ input: { readOnly: true } }} />}
        label="Email"
        isRequired
      />
      <FormField
        name="password"
        label="Password"
        field={<TextField type="password" placeholder="Password" />}
        isRequired
      />
      <FormField
        name="password_confirm"
        label="Password confirm"
        field={<TextField type="password" placeholder="Password" />}
        isRequired
      />

      <input type="hidden" {...form.register('token', { value: token })} />

      <div>
        <Button type="submit" variant="contained">
          Submit
        </Button>
      </div>
    </Form>
  );
};

export default NewPasswordForm;
