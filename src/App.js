import React, { useReducer } from "react";
import FilterableList from "./Components/FilterableList";

import { reducer, DEFAULT_EDITING_RECORD } from "./stateManager/reducer";
import DispatchContext from "./stateManager/dispatch";

import Form from "./Components/Form";

import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";

function App() {
  const [{ mode, records, editingRecord }, dispatch] = useReducer(reducer, {
    mode: "search",
    records: [],
    editingRecord: DEFAULT_EDITING_RECORD,
  });

  return (
    <Container>
      <Jumbotron>
        <DispatchContext.Provider value={dispatch}>
          {mode === "search" && <FilterableList data={records} />}
          {mode === "editOrAdd" && (
            <Form
              id={editingRecord.id}
              initialName={editingRecord.name}
              initialPhone={editingRecord.phone}
            />
          )}
        </DispatchContext.Provider>
      </Jumbotron>
    </Container>
  );
}

export default App;
