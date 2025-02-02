import z from 'zod';
import i18next from 'i18next';

export const LoginFormSchema = z.object({
  email: z
    .string()
    .min(1, { message: i18next.t('form:message.error.required') })
    .email({ message: i18next.t('form:message.error.email_format') }),
  password: z.string().min(1, { message: i18next.t('form:message.error.required') }),
});

export type ILoginForm = z.infer<typeof LoginFormSchema>;
