import { Col, Container, Image, Nav, Row } from "react-bootstrap";

function App() {
  return (
    <Container>
      <Image
        src="https://static.wixstatic.com/media/2524ce_cb266239a431485aa92c419e50505f7a~mv2.png"
        className="mx-auto d-block"
      />
      <Row>
        <h1 className="text-center">HYF Frontend template</h1>
        <Col>
          <Nav.Link href="/recipes" className="text-center">
            Recipes List
          </Nav.Link>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
