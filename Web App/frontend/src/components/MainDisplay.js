import React from "react";
import { Container, Row, Col, Tabs, Tab, Button } from "react-bootstrap";

const MainFooter = () => {
  return (
	 <Container fluid className="h-100">
		<Row className="ps-1">
			<Tabs
				defaultActiveKey="home"
			 	transition={false}
			 	className="mt-1 ">
			 	<Tab eventKey="home" title="Tab 1" />
			 	<Tab eventKey="profile" title="Tab 2" />
			 	<Tab eventKey="contact" title="Tab 3" />
		  	</Tabs>
		</Row>
		<Row>
		  	<Col md={3} className="p-1">
			 	<Button variant="light" className="mb-1 w-100">Category 1</Button>
			 	<Button variant="light" className="mb-1 w-100">Category 2</Button>
			 	<Button variant="light" className="mb-1 w-100">Category 3</Button>
		  	</Col>
		  	<Col className="bg-white">
			 	<p>Stock 1</p>
			 	<p>Stock 2</p>
			 	<p>Stock 3</p>
		  	</Col>
		</Row>
	 </Container>
  );
};
export default MainFooter;
