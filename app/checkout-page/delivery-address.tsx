import { Row } from "react-bootstrap";
import { User } from "../types";

const DeliveryAddress = ({ user }: { user: User }) => {
  return (
    <>
      <h3 className='my-4 d-flex justify-content-center'>Checkout</h3>
      <Row>
        <h5 className='mt-4'>Delivery Address:</h5>
        <p className='pb-2'>{user.address.street} {user.address.city} {user.address.zipcode} {user.address.number}</p>
      </Row>
    </>
  );
}

export default DeliveryAddress;