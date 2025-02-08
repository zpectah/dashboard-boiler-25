import { useQuery } from '@tanstack/react-query';
import { AppDefinition } from '../../types';
import { APP_DEFINITION_API_KEY } from '../../constants';

export const useAppDefinitionQuery = () => {
  const query = useQuery<AppDefinition>({
    queryKey: [APP_DEFINITION_API_KEY],
    queryFn: () => fetch('/definition/app.json').then((response) => response.json()),
  });

  return {
    ...query,
  };
};
