import { Stack, StackProps } from '@mui/material';
import { FormContext } from './Form.context';
import { FieldValues, UseFormReturn } from 'react-hook-form';
import { WithChildren, FormElementProps } from '../../types';

interface FormProps<T extends FieldValues> extends WithChildren {
  stackProps?: Partial<Omit<StackProps, 'children'>>;
  form: UseFormReturn<T>;
  onSubmit: FormElementProps['onSubmit'];
  formProps?: Partial<Omit<FormElementProps, 'children' | 'onSubmit'>>;
  disableWrapper?: boolean;
}

const Form = <T extends FieldValues>({
  children,
  form,
  onSubmit,
  formProps,
  stackProps,
  disableWrapper,
}: FormProps<T>) => {
  const finalStackProps: StackProps = {
    direction: 'column',
    gap: 2,
    ...stackProps,
  };

  const renderChildren = () => {
    if (disableWrapper) return <>{children}</>;

    return <Stack {...finalStackProps}>{children}</Stack>;
  };

  const finalFormProps: FormElementProps = {
    ...formProps,
    onSubmit,
    children: renderChildren(),
  };

  return (
    <FormContext.Provider
      value={{
        form: form as UseFormReturn<FieldValues>,
      }}
    >
      <form {...finalFormProps} />
    </FormContext.Provider>
  );
};

export default Form;
