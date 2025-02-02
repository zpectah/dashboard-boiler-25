import { Link } from 'react-router-dom';
import config from '../../../config';

const PaymentsList = () => {
  return (
    <>
      ...PaymentsList...
      <br />
      <Link to={`${config.routes.routes.payments.path}/1`}>Detail 1</Link>
      <Link to={`${config.routes.routes.payments.path}/2`}>Detail 2</Link>
      <Link to={`${config.routes.routes.payments.path}/3`}>Detail 3</Link>
    </>
  );
};

export default PaymentsList;
