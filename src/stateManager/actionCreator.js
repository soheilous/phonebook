function actionCreator(type, payload) {
  return { type, payload };
}

export const addBtnClicked = () => actionCreator("ADD_CLICKED");
export const saveBtnClicked = (record) => actionCreator("SAVE_CLICKED", record);
export const cancelBtnClicked = () => actionCreator("CANCEL_CLICKED");
export const deleteBtnClicked = (id) => actionCreator("DELETE_CLICKED", id);
export const editBtnClicked = (record) => actionCreator("EDIT_CLICKED", record);
