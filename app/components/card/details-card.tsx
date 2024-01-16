import { CardBody, CardFooter, CardHeader, CardImg, CardText, CardTitle, ListGroupItem, Nav, NavItem, NavLink } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

function DetailsCard() {
  return (
    <Card className='shadow-sm  rounded-0 border-0 border-0' style={{ width: '25rem' }}>
      <CardImg className='rounded-0 border-0' variant="top" src="/feature-card.jpg" />
      <CardHeader style={{ background: 'white' }}>
        <Nav defaultActiveKey="#first">
          <NavItem>
            <NavLink href="#first">
              <small> Google</small>
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink href="#disabled" className='text-secondary' disabled>
              <small>Trending</small>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#disabled" className='text-secondary' disabled>
              <small>New</small>
            </NavLink>
          </NavItem>
        </Nav>
      </CardHeader>
      <CardBody>
        <CardTitle>Card Title</CardTitle>
        <CardText>
          Some quick example text to build on the card title and make up the
          bulk of the cards content.
        </CardText>
        <div className='d-flex justify-content-between'>
          <p className="card-text"><small className="text-secondary"><i className="bi bi-alarm"></i> 22 April 2023</small></p>
          <p className="card-text"><small className="text-secondary"><i className="bi bi-chat-right-text"></i> 10 comments</small></p>
        </div>
      </CardBody>
      <CardFooter style={{ background: 'white' }}>
        <strong>
          <small>
            Learn More <i className="bi bi-chevron-right"></i>
          </small>
        </strong>
      </CardFooter>
    </Card>
  );
}

export default DetailsCard;