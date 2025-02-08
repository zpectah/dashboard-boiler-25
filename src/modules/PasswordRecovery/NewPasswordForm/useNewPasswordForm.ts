import { useNavigate } from 'react-router-dom';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import config from '../../../config';
import { NewPasswordFormSchema, INewPasswordForm } from './schema';

export const useNewPasswordForm = () => {
  const form = useForm<INewPasswordForm>({
    resolver: zodResolver(NewPasswordFormSchema),
  });

  const navigate = useNavigate();

  const submitHandler: SubmitHandler<INewPasswordForm> = (data) => {
    console.log('submit data and confirmation', data);

    navigate(`${config.routes.routes.password_recovery.path}#confirmation`);
  };

  return {
    form,
    onSubmit: form.handleSubmit(submitHandler),
  };
};
