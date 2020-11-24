import React from "react";

import { useDispatch } from "../stateManager/dispatch";
import {
  deleteBtnClicked,
  editBtnClicked,
} from "../stateManager/actionCreator";

import ListItem from "./ListItem";

import ListGroup from "react-bootstrap/ListGroup";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function List({ data }) {
  const dispatch = useDispatch();

  return (
    <ListGroup>
      {data.map((item) => (
        <ListItem
          key={item.id}
          text={
            <Row>
              <Col md="6"> Name : {item.name}</Col>
              <Col md="6"> Phone : {item.phone}</Col>
            </Row>
          }
          onEdit={() => dispatch(editBtnClicked(item))}
          onDelete={() => dispatch(deleteBtnClicked(item.id))}
        />
      ))}
    </ListGroup>
  );
}

export default List;
