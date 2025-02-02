import { useParams } from 'react-router-dom';
import { ViewLayout } from '../../components';
import { PaymentsList } from './PaymentsList';
import { PaymentsDetail } from './PaymentsDetail';

const Payments = () => {
  const { id } = useParams();

  return (
    <ViewLayout meta={{ title: 'Payments' }}>
      <PaymentsDetail id={id} />
      <PaymentsList />
    </ViewLayout>
  );
};

export default Payments;
