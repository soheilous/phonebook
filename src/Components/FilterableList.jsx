import React, { useMemo, useState } from "react";

import { addBtnClicked } from "../stateManager/actionCreator";
import { useDispatch } from "../stateManager/dispatch";

import List from "./List";

import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

function FilterableList({ data }) {
  const [keyword, setKeyword] = useState("");
  const dispatch = useDispatch();
  const filteredList = useMemo(
    () =>
      data.filter((item) =>
        item.name.toLowerCase().includes(keyword.toLowerCase())
      ),
    [keyword, data]
  );
  function handleAdd() {
    dispatch(addBtnClicked());
  }

  return (
    <Form className="filterable-list">
      <Form.Row>
        <Col md="11">
          <Form.Control
            type="text"
            placeholder="Enter a keyword to search ..."
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            name="search"
          />
        </Col>
        <Col md="1">
          <Button onClick={handleAdd}>Add</Button>
        </Col>
      </Form.Row>
      <br />
      <List data={filteredList} />
    </Form>
  );
}
export default FilterableList;
