import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import config from '../../config';
import { PaymentsItem, PaymentsItems } from '../../types';
import { PAYMENTS_API_KEY } from '../../constants';

export const usePaymentsQuery = () => {
  const query = useQuery<PaymentsItems>({
    queryKey: [PAYMENTS_API_KEY, `${PAYMENTS_API_KEY}-list`],
    queryFn: () => axios.get(config.api.path.payments).then((response) => response.data),
  });

  return {
    ...query,
  };
};

export const usePaymentsDetailQuery = (id: string) => {
  const query = useQuery<PaymentsItems>({
    queryKey: [PAYMENTS_API_KEY, `${PAYMENTS_API_KEY}-detail-${id}`],
    queryFn: () => axios.get(config.api.path.payments).then((response) => response.data),
    enabled: !!id,
  });

  return {
    ...query,
  };
};

export const usePaymentsMutations = () => {
  const queryClient = useQueryClient();

  const createMutation = useMutation<unknown, unknown, PaymentsItem>({
    mutationFn: (payload) => axios.put(config.api.path.payments, payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [PAYMENTS_API_KEY, `${PAYMENTS_API_KEY}-create`] });
    },
  });

  const patchMutation = useMutation<unknown, unknown, PaymentsItem>({
    mutationFn: (payload) => axios.patch(`${config.api.path.payments}/${payload.id}`, payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [PAYMENTS_API_KEY, `${PAYMENTS_API_KEY}-patch`] });
    },
  });

  return {
    createMutation,
    patchMutation,
  };
};
