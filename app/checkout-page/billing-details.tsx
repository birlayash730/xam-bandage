import { Button, Card, Col, Row } from "react-bootstrap";

const BillingDetails = ({subtotal}: {subtotal: number}) => {
  return (
    <Card className='mt-4 p-4'>
      <Row>
        <h5>Billing Details</h5>
        <Col>
          <p>Sub Total :</p>
          <p>VAT (8%) :</p>
          <strong><p className='text-warning'>Order Total :</p></strong>
        </Col>
        <Col className='d-flex flex-column justify-content-end'>
          <p>${subtotal.toFixed(2)}</p>
          <p>${(subtotal * 0.08).toFixed(2)}</p>
          <p>${(subtotal + (subtotal * 0.08)).toFixed(2)}</p>
        </Col>
      </Row>
      <Row>
        <Button>
          Proceed to pay
        </Button>
      </Row>
    </Card>
  );
}

export default BillingDetails;