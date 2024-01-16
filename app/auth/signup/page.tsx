import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import {
  Button,
  Container,
  Form,
  FormControl,
  FormLabel,
  FormText,
} from "react-bootstrap";
import Link from "next/link";

const Signup = () => {
  return (
    <Container
      style={{ width: "50%" }}
      className="d-flex flex-column justify-content-center"
    >
      <h1 className="d-flex justify-content-center m-4">Signup</h1>
      <Form className="m-4 d-flex flex-column">
        <FormLabel>First Name</FormLabel>
        <div className="d-flex flex-row">
          <FormControl type="text" placeholder="First Name" />
          <FormControl type="text" placeholder="last Name" />
        </div>
        <FormLabel>Email address</FormLabel>
        <FormControl type="email" placeholder="name@example.com" />
        <FormLabel>Password</FormLabel>
        <FormControl type="password" placeholder="Password" />
        <FormLabel>City</FormLabel>
        <FormControl type="text" placeholder="city" />
        <FormLabel>Street & Number</FormLabel>
        <div className="d-flex">
          <FormControl type="text" placeholder="street" />
          <FormControl type="number" placeholder="number" />
        </div>
        <FormLabel>Zip Code</FormLabel>
        <FormControl type="text" placeholder="zipcode" />
        <FormLabel>Mobile Number</FormLabel>
        <FormControl type="number" placeholder="9999999999" />
        <div className="d-flex flex-row align-items-center justify-content-center m-4  ">
          <Button className="me-3" variant="primary" type="submit">
            Signup
          </Button>
          <Link href="/auth">Already have account?</Link>
        </div>
      </Form>
    </Container>
  );
};

export default Signup;
