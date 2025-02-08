import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { UsersItem, UsersItems } from '../../types';

const QUERY_KEY = 'users';

export const useUsersQuery = () => {
  const query = useQuery<UsersItems>({
    queryKey: [QUERY_KEY, `${QUERY_KEY}-list`],
    queryFn: () => fetch('/data/users.json').then((response) => response.json()),
  });

  return {
    ...query,
  };
};

export const useUsersDetailQuery = (id: string) => {
  const query = useQuery<UsersItems>({
    queryKey: [QUERY_KEY, `${QUERY_KEY}-detail`, `${QUERY_KEY}-detail-${id}`],
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
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY, `${QUERY_KEY}-mutation`] });
    },
  });

  return {
    ...mutation,
  };
};
