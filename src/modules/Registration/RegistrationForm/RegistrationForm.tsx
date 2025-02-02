import { Button } from '@mui/material';
import { Form, FormField, TextField } from '../../../components';
import { useRegistrationForm } from './useRegistrationForm';
import { IRegistrationForm } from './schema.ts';

const RegistrationForm = () => {
  const { form, onSubmit } = useRegistrationForm();

  return (
    <Form<IRegistrationForm> form={form} onSubmit={onSubmit}>
      <FormField name="email" field={<TextField type="email" placeholder="Email" />} label="Email" isRequired />
      <FormField name="name" label="Name" field={<TextField placeholder="Name" />} isRequired />
      <FormField name="surname" label="Surname" field={<TextField placeholder="Surname" />} isRequired />
      <FormField
        name="password"
        label="Password"
        field={<TextField type="password" placeholder="Password" />}
        isRequired
      />
      <FormField
        name="password_confirm"
        label="Password confirm"
        field={<TextField type="password" placeholder="Confirm password" />}
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

export default RegistrationForm;
