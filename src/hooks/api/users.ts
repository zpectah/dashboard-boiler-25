import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import config from '../../config';
import { UsersItem, UsersItems } from '../../types';
import { USERS_API_KEY } from '../../constants';

export const useUsersQuery = () => {
  const query = useQuery<UsersItems>({
    queryKey: [USERS_API_KEY, `${USERS_API_KEY}-list`],
    queryFn: () => axios.get(config.api.path.users).then((response) => response.data),
  });

  return {
    ...query,
  };
};

export const useUsersDetailQuery = (id: string) => {
  const query = useQuery<UsersItems>({
    queryKey: [USERS_API_KEY, `${USERS_API_KEY}-detail-${id}`],
    queryFn: () => axios.get(config.api.path.users).then((response) => response.data),
    enabled: !!id,
  });

  return {
    ...query,
  };
};

export const useUsersMutations = () => {
  const queryClient = useQueryClient();

  const createMutation = useMutation<unknown, unknown, UsersItem>({
    mutationFn: (payload) => axios.put(config.api.path.users, payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [USERS_API_KEY, `${USERS_API_KEY}-create`] });
    },
  });

  const patchMutation = useMutation<unknown, unknown, UsersItem>({
    mutationFn: (payload) => axios.patch(`${config.api.path.users}/${payload.id}`, payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [USERS_API_KEY, `${USERS_API_KEY}-patch`] });
    },
  });

  return {
    createMutation,
    patchMutation,
  };
};
