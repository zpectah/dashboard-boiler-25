import { useParams } from 'react-router-dom';
import { PaymentsList } from './PaymentsList';
import { PaymentsDetail } from './PaymentsDetail';

const Payments = () => {
  const { id } = useParams();

  return (
    <>
      <PaymentsDetail id={id} />
      <PaymentsList />
    </>
  );
};

export default Payments;
