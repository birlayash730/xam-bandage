import { Col, Image } from "react-bootstrap";
import OrderDetail from "./order-detail";

const OrderSummary = () => {
  return (
    <Col md={8}>
      <h5>Order Summary</h5>
      <table>
        <thead>
          <tr>
            <th className='p-4'>Product Image</th>
            <th className='p-4'>Product</th>
            <th className='p-4'>Quantity</th>
            <th className='p-4'>Price</th>
          </tr>
        </thead>
        <tbody>
          <OrderDetail />
        </tbody>
      </table>
    </Col>
  );
}

export default OrderSummary;