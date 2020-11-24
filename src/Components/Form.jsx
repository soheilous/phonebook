import React from // , { useState }
"react";
import { Formik } from "formik";
import * as yup from "yup";

import { useDispatch } from "../stateManager/dispatch";
import {
  cancelBtnClicked,
  saveBtnClicked,
} from "../stateManager/actionCreator";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

// const Row = ({ children }) => {
//   return <div className="row">{children}</div>;
// };

function EditOrAdd({ id, initialName, initialPhone }) {
  // const [name, setName] = useState(initialName);
  // const [phone, setPhone] = useState(initialPhone);
  const dispatch = useDispatch();

  const schema = yup.object({
    name: yup.string().required(),
    phone: yup.number().required(),
  });

  function handleSave({ name, phone }) {
    dispatch(saveBtnClicked({ id, name, phone }));
  }
  function handleCancel() {
    dispatch(cancelBtnClicked());
  }

  return (
    <Formik
      validationSchema={schema}
      onSubmit={handleSave}
      initialValues={{ name: initialName, phone: initialPhone }}
    >
      {({ values, errors, handleChange, handleSubmit }) => (
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Name </Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={values.name}
              onChange={handleChange}
              isInvalid={!!errors.name}
              // value={name}
              // onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Phone </Form.Label>
            <Form.Control
              type="text"
              name="phone"
              value={values.phone}
              onChange={handleChange}
              isInvalid={!!errors.phone}
              // value={phone}
              // onChange={(e) => setPhone(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Button type="submit">Save</Button>{" "}
            <Button variant="secondary" onClick={handleCancel} type="button">
              Cancel
            </Button>
          </Form.Group>
        </Form>
      )}
    </Formik>
  );
}

export default EditOrAdd;
