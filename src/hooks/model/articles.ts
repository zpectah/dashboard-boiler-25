import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { ArticlesItem, ArticlesItems } from '../../types';
import { ARTICLES_API_KEY } from '../../constants';

export const useArticlesQuery = () => {
  const query = useQuery<ArticlesItems>({
    queryKey: [ARTICLES_API_KEY, `${ARTICLES_API_KEY}-list`],
    queryFn: () => fetch('/data/articles.json').then((response) => response.json()),
  });

  return {
    ...query,
  };
};

export const useArticlesDetailQuery = (id: string) => {
  const query = useQuery<ArticlesItems>({
    queryKey: [ARTICLES_API_KEY, `${ARTICLES_API_KEY}-detail`, `${ARTICLES_API_KEY}-detail-${id}`],
    queryFn: () => fetch('/data/articles.json').then((response) => response.json()),
    enabled: !!id,
  });

  return {
    ...query,
  };
};

export const useArticlesMutation = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation<ArticlesItem>({
    mutationFn: async (article) => {
      const response = await fetch('/data/articles.json', {
        method: 'POST',
        body: JSON.stringify(article),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
      return await response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [ARTICLES_API_KEY, `${ARTICLES_API_KEY}-mutation`] });
    },
  });

  return {
    ...mutation,
  };
};
