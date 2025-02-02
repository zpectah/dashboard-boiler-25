import { OverLayout } from '../../components';

interface ErrorProps {
  code: number;
}

const Error = ({ code }: ErrorProps) => {
  return <OverLayout>...Error: {code}...</OverLayout>;
};

export default Error;
