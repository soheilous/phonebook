export const DEFAULT_EDITING_RECORD = { name: "", phone: "", id: "" };

function idMaker() {
  let counter = 0;
  return function id() {
    return (counter = counter + 1);
  };
}
const makeId = new idMaker();

function record(name, phone) {
  return { name, phone, id: makeId() };
}

export function reducer(state, action) {
  switch (action.type) {
    case "ADD_CLICKED":
      return { ...state, mode: "editOrAdd" };

    case "CANCEL_CLICKED":
      return { ...state, mode: "search" };

    case "SAVE_CLICKED":
      return handleSave(state, action.payload);

    case "DELETE_CLICKED":
      return {
        ...state,
        records: state.records.filter((item) => item.id !== action.payload),
      };

    case "EDIT_CLICKED":
      return { ...state, mode: "editOrAdd", editingRecord: action.payload };

    default:
      return state;
  }
}

export function handleSave(state, { id, name, phone }) {
  const { records } = state;
  let newRecords = [];
  if (id) {
    const index = records.findIndex((item) => item.id === id);
    if (index !== -1) {
      newRecords = [...records];
      newRecords.splice(index, 1, { id, name, phone });
    }
  } else {
    newRecords = [...records, new record(name, phone)];
  }

  return {
    ...state,
    mode: "search",
    editingRecord: DEFAULT_EDITING_RECORD,
    records: newRecords,
  };
}
