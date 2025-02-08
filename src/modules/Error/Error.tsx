import { PageLayout } from '../../components';
import { useDocumentMeta } from '../../helpers';

interface ErrorProps {
  code: number;
}

const Error = ({ code }: ErrorProps) => {
  useDocumentMeta({ title: 'Error' });

  return <PageLayout variant="centered">...Error: {code}...</PageLayout>;
};

export default Error;
