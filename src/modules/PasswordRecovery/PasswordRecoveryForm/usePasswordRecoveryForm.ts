import { useNavigate } from 'react-router-dom';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import config from '../../../config';
import { PasswordRecoveryFormSchema, IPasswordRecoveryForm } from './schema';

export const usePasswordRecoveryForm = () => {
  const form = useForm<IPasswordRecoveryForm>({
    resolver: zodResolver(PasswordRecoveryFormSchema),
  });

  const navigate = useNavigate();

  const submitHandler: SubmitHandler<IPasswordRecoveryForm> = (data) => {
    console.log('submit data and pending', data);

    navigate(`${config.routes.routes.password_recovery.path}#pending`);
  };

  return {
    form,
    onSubmit: form.handleSubmit(submitHandler),
  };
};
