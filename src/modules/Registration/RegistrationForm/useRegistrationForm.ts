import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { RegistrationFormSchema, IRegistrationForm } from './schema';

export const useRegistrationForm = () => {
  const form = useForm<IRegistrationForm>({
    resolver: zodResolver(RegistrationFormSchema),
  });

  const submitHandler: SubmitHandler<IRegistrationForm> = (data) => {
    console.log('submit data', data);
  };

  return {
    form,
    onSubmit: form.handleSubmit(submitHandler),
  };
};
