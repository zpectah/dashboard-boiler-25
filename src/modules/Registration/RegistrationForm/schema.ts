import z from 'zod';
import i18next from 'i18next';

export const RegistrationFormSchema = z.object({
  email: z
    .string()
    .min(1, { message: i18next.t('form:message.error.required') })
    .email({ message: i18next.t('form:message.error.email_format') }),
  name: z.string().min(1, { message: i18next.t('form:message.error.required') }),
  surname: z.string().min(1, { message: i18next.t('form:message.error.required') }),
  password: z.string().min(1, { message: i18next.t('form:message.error.required') }),
  password_confirm: z.string().min(1, { message: i18next.t('form:message.error.required') }),
});

export type IRegistrationForm = z.infer<typeof RegistrationFormSchema>;
