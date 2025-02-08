import { AppDefinition } from '../types';
import { APP_DEFINITION_DEFAULTS } from '../constants';
import { useAppDefinitionQuery } from './api';

export const useAppDefinition = (): AppDefinition => {
  const { data } = useAppDefinitionQuery();

  return data
    ? {
        ...data,
        init: true,
      }
    : APP_DEFINITION_DEFAULTS;
};
