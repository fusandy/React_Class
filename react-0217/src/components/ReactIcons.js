// 0302 課堂: React-icons

import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { BsFillFileArrowUpFill } from 'react-icons/bs';

function ReactIcon(props) {
  return (
    <>
      <Container>
        <Row className="justify-content-md-center">
          <Col md="auto">
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="./../public/logo192.png" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">
                  <BsFillFileArrowUpFill />
                  Go somewhere
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}
export default ReactIcon;
