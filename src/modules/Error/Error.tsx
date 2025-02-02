import { OverLayout } from '../../components';
import { useDocumentMeta } from '../../helpers';

interface ErrorProps {
  code: number;
}

const Error = ({ code }: ErrorProps) => {
  useDocumentMeta({ title: 'Error' });

  return <OverLayout>...Error: {code}...</OverLayout>;
};

export default Error;
