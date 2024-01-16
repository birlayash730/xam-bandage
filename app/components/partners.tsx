import { Container, Image } from "react-bootstrap";

const Partners = () => {
  return (
    <Container>
      <div className="our-partners bg-light d-flex justify-content-between my-4 p-4">
        <Image src="/hoolii.png" alt="brand" />
        <Image src="/lyft.png" alt="brand" />
        <Image src="/stripe.png" alt="brand" />
        <Image src="/vector.png" alt="brand" />
        <Image src="/aws.png" alt="brand" />
      </div>
    </Container>
  );
}

export default Partners;