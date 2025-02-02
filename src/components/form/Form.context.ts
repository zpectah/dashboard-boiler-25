import { createContext, useContext } from 'react';
import { FieldValues, UseFormReturn } from 'react-hook-form';

interface IFormContext<T extends FieldValues> {
  form?: UseFormReturn<T>;
}

export const FormContext = createContext<IFormContext<FieldValues>>({});

export const useFormContext = () => useContext<IFormContext<FieldValues>>(FormContext);
