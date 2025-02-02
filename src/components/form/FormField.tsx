import { cloneElement, useMemo, ReactElement } from 'react';
import { RegisterOptions } from 'react-hook-form';
import { styled, Stack, StackProps } from '@mui/material';
import { useFormContext } from './Form.context';

const Label = styled('label')(({ theme }) => ({
  ...theme.typography.button,
}));

const Message = styled('div')(({ theme }) => ({
  ...theme.typography.caption,
}));

const ErrorMessage = styled(Message)(({ theme }) => ({
  color: theme.palette.error.main,
}));

interface FormFieldProps {
  name: string;
  field: ReactElement;
  fieldId?: string;
  label?: string;
  isRequired?: boolean;
  isDisabled?: boolean;
  stackProps?: Partial<Omit<StackProps, 'children'>>;
  options?: RegisterOptions;
  helperTexts?: string[];
  testId?: string;
}

const FormField = ({
  name,
  field,
  fieldId,
  label,
  isRequired,
  isDisabled,
  stackProps,
  options,
  helperTexts = [],
  testId,
}: FormFieldProps) => {
  const { form } = useFormContext();

  const finalStackProps: StackProps = {
    direction: 'column',
    gap: 1,
    ...stackProps,
  };

  const fieldErrorMessage = useMemo(() => form?.formState?.errors[name]?.message as string, [form?.formState, name]);

  return (
    <Stack {...finalStackProps}>
      {label && (
        <Label htmlFor={name}>
          {label}
          {isRequired && ' *'}
        </Label>
      )}
      <Stack {...finalStackProps}>
        {cloneElement(field, {
          ...form?.register(name, { required: isRequired, ...options }),
          disabled: isDisabled,
          id: fieldId,
          error: !!fieldErrorMessage,
          'data-test-id': testId,
        })}
        <Stack direction="column">
          {fieldErrorMessage && <ErrorMessage>{fieldErrorMessage}</ErrorMessage>}
          {helperTexts?.map((text, i) => <Message key={i}>{text}</Message>)}
        </Stack>
      </Stack>
    </Stack>
  );
};

export default FormField;
