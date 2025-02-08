import z from 'zod';
import i18next from 'i18next';

export const PasswordRecoveryFormSchema = z.object({
  email: z
    .string()
    .min(1, { message: i18next.t('form:message.error.required') })
    .email({ message: i18next.t('form:message.error.email_format') }),
  token: z.string().readonly(),
});

export type IPasswordRecoveryForm = z.infer<typeof PasswordRecoveryFormSchema>;
