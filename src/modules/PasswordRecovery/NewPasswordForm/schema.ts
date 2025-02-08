import z from 'zod';
import i18next from 'i18next';

export const NewPasswordFormSchema = z.object({
  password: z.string().min(1, { message: i18next.t('form:message.error.required') }),
  password_confirm: z.string().min(1, { message: i18next.t('form:message.error.required') }),
  email: z.string().readonly(),
  token: z.string().readonly(),
});

export type INewPasswordForm = z.infer<typeof NewPasswordFormSchema>;
