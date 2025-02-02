import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

export const useUsersQuery = () => {
  const query = useQuery({
    queryKey: ['users'],
    queryFn: () => fetch('/data/users.json').then((response) => response.json()),
  });

  return {
    ...query,
  };
};

export const useUsersDetailQuery = (id: string) => {
  const query = useQuery({
    queryKey: ['users'],
    queryFn: () => fetch('/data/users.json').then((response) => response.json()),
    enabled: !!id,
  });

  return {
    ...query,
  };
};

export const useUsersMutation = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (user: any) => {
      return fetch('/data/users.json', {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }).then((response) => response.json());
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] });
    },
  });

  return {
    ...mutation,
  };
};
