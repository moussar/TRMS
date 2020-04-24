import * as T from "../types/ui";

const onToggle = name => ({
  type: T.TOGGLE_UI,
  payload: { name }
});

const onUpdateField = (form, { target: { name, value } }) => ({
  type: T.UPDATE_FIELD,
  payload: {
    form,
    name,
    value: value === "true" || value === "false" ? JSON.parse(value) : value
  }
});

const onUpdateForm = (form, item) => ({
  type: T.UPDATE_FORM,
  payload: { form, item }
});

const onCleanForm = form => ({
  type: T.CLEAN_FORM,
  payload: { form }
});

const onUpdateModal = (modal, item) => ({
  type: T.UPDATE_MODAL,
  payload: { modal, item }
});

export { onToggle, onUpdateField, onUpdateForm, onCleanForm, onUpdateModal };
