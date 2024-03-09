import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import MainHeader from "./components/MainHeader";
import MainFooter from "./components/MainFooter";
import MainDisplay from "./components/MainDisplay";

import "./css/App.css";

function App() {
  return (
    <Container fluid className="vh-100">
      <Row>
        <MainHeader />
      </Row>
      <Row className="menu h-75">
        <Col className="p-1" sm={"2"} lg={"2"}>
          <Button variant="light" className="mb-1 w-100">Action 1</Button>
          <Button variant="light" className="mb-1 w-100">Action 2</Button>
          <Button variant="light" className="mb-1 w-100">Action 3</Button>
        </Col>
        <Col className="display p-0">
          <MainDisplay />
        </Col>
      </Row>
      <Row>
        <MainFooter />
      </Row>
    </Container>
  );
}

export default App;
