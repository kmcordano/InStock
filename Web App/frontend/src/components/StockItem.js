import React from "react";
import { Button, Form} from "react-bootstrap";

const StockItem = ({itemName}) => {
   return (
      <> 
         <Form className="border-top p-1">
            <Button className="d-inline-block">+</Button>{" "}
            <Form.Control style={{width: "40px", display: "inline-block"}} type="text" placeholder="#"/>{" "}
            <Button className="d-inline-block">-</Button>{" "}
            <Form.Label>{itemName}</Form.Label>
         </Form>
      </>
   );
};

export default StockItem;