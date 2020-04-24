import * as T from "../types/ui";

const listAdd = { title: "" };
const cardAdd = { title: "", decscription: "" };
const form = { listAdd, cardAdd };
const modal = {};
const initialUi = { isOn: {}, form, modal };

const uiReducer = (ui = initialUi, action) => {
  const { type, payload } = action;
  switch (type) {
    case T.TOGGLE_UI:
      return {
        ...ui,
        isOn: { ...ui.isOn, [payload.name]: !ui.isOn[payload.name] }
      };
    case T.UPDATE_FIELD:
      return {
        ...ui,
        form: {
          ...ui.form,
          [payload.form]: {
            ...ui.form[payload.form],
            [payload.name]: payload.value
          }
        }
      };
    case T.UPDATE_FORM:
      return {
        ...ui,
        form: { ...ui.form, [payload.form]: payload.item }
      };
    case T.CLEAN_FORM:
      return {
        ...ui,
        form: { ...ui.form, [payload.form]: form[payload.form] }
      };
    case T.UPDATE_MODAL:
      return {
        ...ui,
        modal: { ...ui.modal, [payload.modal]: payload.item }
      };
    default:
      return ui;
  }
};

export default uiReducer;
