import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import config from '../../config';
import { ArticlesItem, ArticlesItems } from '../../types';
import { ARTICLES_API_KEY } from '../../constants';

export const useArticlesQuery = () => {
  const query = useQuery<ArticlesItems>({
    queryKey: [ARTICLES_API_KEY, `${ARTICLES_API_KEY}-list`],
    queryFn: () => axios.get(config.api.path.articles).then((response) => response.data),
  });

  return {
    ...query,
  };
};

export const useArticlesDetailQuery = (id: string) => {
  const query = useQuery<ArticlesItems>({
    queryKey: [ARTICLES_API_KEY, `${ARTICLES_API_KEY}-detail-${id}`],
    queryFn: () => axios.get(config.api.path.articles).then((response) => response.data),
    enabled: !!id,
  });

  return {
    ...query,
  };
};

export const useArticlesMutations = () => {
  const queryClient = useQueryClient();

  const createMutation = useMutation<unknown, unknown, ArticlesItem>({
    mutationFn: (payload) => axios.put(config.api.path.articles, payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [ARTICLES_API_KEY, `${ARTICLES_API_KEY}-create`] });
    },
  });

  const patchMutation = useMutation<unknown, unknown, ArticlesItem>({
    mutationFn: (payload) => axios.patch(`${config.api.path.articles}/${payload.id}`, payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [ARTICLES_API_KEY, `${ARTICLES_API_KEY}-patch`] });
    },
  });

  return {
    createMutation,
    patchMutation,
  };
};
