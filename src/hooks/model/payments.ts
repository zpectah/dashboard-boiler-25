import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

export const usePaymentsQuery = () => {
  const query = useQuery({
    queryKey: ['payments'],
    queryFn: () => fetch('/data/payments.json').then((response) => response.json()),
  });

  return {
    ...query,
  };
};

export const usePaymentsDetailQuery = (id: string) => {
  const query = useQuery({
    queryKey: ['payments'],
    queryFn: () => fetch('/data/payments.json').then((response) => response.json()),
    enabled: !!id,
  });

  return {
    ...query,
  };
};

export const usePaymentsMutation = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (payment: any) => {
      return fetch('/data/payments.json', {
        method: 'POST',
        body: JSON.stringify(payment),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }).then((response) => response.json());
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['payments'] });
    },
  });

  return {
    ...mutation,
  };
};
