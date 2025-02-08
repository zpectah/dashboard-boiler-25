import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { PaymentsItem, PaymentsItems } from '../../types';

const QUERY_KEY = 'payments';

export const usePaymentsQuery = () => {
  const query = useQuery<PaymentsItems>({
    queryKey: [QUERY_KEY, `${QUERY_KEY}-list`],
    queryFn: () => fetch('/data/payments.json').then((response) => response.json()),
  });

  return {
    ...query,
  };
};

export const usePaymentsDetailQuery = (id: string) => {
  const query = useQuery<PaymentsItems>({
    queryKey: [QUERY_KEY, `${QUERY_KEY}-detail`, `${QUERY_KEY}-detail-${id}`],
    queryFn: () => fetch('/data/payments.json').then((response) => response.json()),
    enabled: !!id,
  });

  return {
    ...query,
  };
};

export const usePaymentsMutation = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation<PaymentsItem>({
    mutationFn: async (payment) => {
      const response = await fetch('/data/payments.json', {
        method: 'POST',
        body: JSON.stringify(payment),
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
