import { useEffect } from 'react';
import config from '../config';
import { DocumentMeta } from '../types';

type UseDocumentMetaProps = Partial<DocumentMeta>;

export const useDocumentMeta = ({ title }: UseDocumentMetaProps) => {
  useEffect(() => {
    let tmpTitle = config.app.meta.name;
    if (title) tmpTitle = `${title} | ${tmpTitle}`;

    document.title = tmpTitle;
  }, [title]);
};
