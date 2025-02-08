import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { UsersItem, UsersItems } from '../../types';
import { USERS_API_KEY } from '../../constants';

export const useUsersQuery = () => {
  const query = useQuery<UsersItems>({
    queryKey: [USERS_API_KEY, `${USERS_API_KEY}-list`],
    queryFn: () => fetch('/data/users.json').then((response) => response.json()),
  });

  return {
    ...query,
  };
};

export const useUsersDetailQuery = (id: string) => {
  const query = useQuery<UsersItems>({
    queryKey: [USERS_API_KEY, `${USERS_API_KEY}-detail`, `${USERS_API_KEY}-detail-${id}`],
    queryFn: () => fetch('/data/users.json').then((response) => response.json()),
    enabled: !!id,
  });

  return {
    ...query,
  };
};

export const useUsersMutation = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation<UsersItem>({
    mutationFn: async (user) => {
      const response = await fetch('/data/users.json', {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
      return await response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [USERS_API_KEY, `${USERS_API_KEY}-mutation`] });
    },
  });

  return {
    ...mutation,
  };
};
