import { forwardRef } from 'react';
import { TextField as MuiTextField, TextFieldProps as MuiTextFieldProps } from '@mui/material';

type TextFieldProps = {} & MuiTextFieldProps;

const TextField = forwardRef<HTMLInputElement, TextFieldProps>((props, ref) => {
  return <MuiTextField {...props} ref={ref} />;
});

export default TextField;
