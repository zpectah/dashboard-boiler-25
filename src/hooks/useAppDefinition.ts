import { AppDefinition } from '../types';
import { APP_DEFINITION_DEFAULTS } from '../constants';
import { useAppDefinitionQuery } from './model';

export const useAppDefinition = (): AppDefinition => {
  const { data } = useAppDefinitionQuery();

  return data ?? APP_DEFINITION_DEFAULTS;
};
