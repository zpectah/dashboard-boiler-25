import { Link } from 'react-router-dom';
import config from '../../../config';

interface PaymentsDetailProps {
  id?: string;
}

const PaymentsDetail = ({ id }: PaymentsDetailProps) => {
  if (!id) return;

  return (
    <>
      ...PaymentsDetail...#{id}...
      <br />
      <Link to={config.routes.routes.payments.path}>Back to list</Link>
    </>
  );
};

export default PaymentsDetail;
