import { Link } from 'react-router-dom';
import config from '../../../config';
import { usePaymentsQuery } from '../../../hooks';
import { Card } from '../../../components';

const PaymentsList = () => {
  const paymentsQuery = usePaymentsQuery();

  return (
    <>
      <Card
        title="Payments list"
        content="Vivamus egestas, viverra rhoncus donec  fringilla placerat posuere mi orci, aliquam vehicula pulvinar mauris. Facilisis quis, nam varius interdum urna ullamcorper elit elit, justo dignissim dui vel dolor elit. Condimentum ullamcorper, nunc sollicitudin at sem fusce ante vestibulum quam nisl vel purus, nulla at imperdiet quis"
      />
      ...PaymentsList...
      <br />
      {paymentsQuery.data && (
        <div>
          {paymentsQuery.data.map((item) => (
            <div key={item.id}>
              {item.uuid} |<Link to={`${config.routes.routes.payments.path}/${item.id}`}>Detail</Link>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default PaymentsList;
