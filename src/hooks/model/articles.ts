import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

export const useArticlesQuery = () => {
  const query = useQuery({
    queryKey: ['articles'],
    queryFn: () => fetch('/data/articles.json').then((response) => response.json()),
  });

  return {
    ...query,
  };
};

export const useArticlesDetailQuery = (id: string) => {
  const query = useQuery({
    queryKey: ['articles'],
    queryFn: () => fetch('/data/articles.json').then((response) => response.json()),
    enabled: !!id,
  });

  return {
    ...query,
  };
};

export const useArticlesMutation = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (article: any) => {
      return fetch('/data/articles.json', {
        method: 'POST',
        body: JSON.stringify(article),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }).then((response) => response.json());
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['articles'] });
    },
  });

  return {
    ...mutation,
  };
};
