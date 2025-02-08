import { Link } from 'react-router-dom';
import config from '../../../config';
import { usePaymentsQuery } from '../../../hooks';

const PaymentsList = () => {
  const paymentsQuery = usePaymentsQuery();

  return (
    <>
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
