import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import config from '../../config';
import { AppDefinition } from '../../types';
import { APP_DEFINITION_API_KEY } from '../../constants';

export const useAppDefinitionQuery = () => {
  const query = useQuery<AppDefinition>({
    queryKey: [APP_DEFINITION_API_KEY],
    queryFn: () => axios.get(config.api.path.appDefinitions).then((response) => response.data),
  });

  return {
    ...query,
  };
};
