import { useNavigate } from 'react-router-dom';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import config from '../../../config';
import { LoginFormSchema, ILoginForm } from './schema';

export const useLoginForm = () => {
  const form = useForm<ILoginForm>({
    resolver: zodResolver(LoginFormSchema),
  });

  const navigate = useNavigate();

  const submitHandler: SubmitHandler<ILoginForm> = (data) => {
    console.log('submit data', data);

    navigate(config.routes.routes.dashboard.path);
  };

  return {
    form,
    onSubmit: form.handleSubmit(submitHandler),
  };
};
