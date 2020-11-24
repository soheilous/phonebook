import React, { useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function ListItem({ text, onEdit, onDelete }) {
  const [show, setShow] = useState(false);

  const handleCancel = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleDelete = () => {
    setShow(false);
    onDelete();
  };
  return (
    <>
      <ListGroup.Item>
        <Row>
          <Col md={9}>{text}</Col>
          <Col md={3}>
            <Button variant="outline-warning" onClick={onEdit}>
              edit
            </Button>{" "}
            <Button variant="outline-danger" onClick={handleShow}>
              delete
            </Button>
          </Col>
        </Row>
      </ListGroup.Item>
      <Modal show={show} onHide={handleCancel}>
        <Modal.Header closeButton>
          <Modal.Title>Warning!!!</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure to delete this record ? </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCancel}>
            No
          </Button>
          <Button variant="primary" onClick={handleDelete}>
            Yes...!
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ListItem;
