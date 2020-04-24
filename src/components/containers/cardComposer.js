import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { useUpdateDeepItem, useKeyboardEvent } from "../../hooks";
import { onCreateCard, onUpdateCard } from "../../store/actions/card";
import CardComposer from "../ui/card-composer";

const CardComposerContainer = ({
  status,
  item,
  idList,
  nbCards,
  formIsOn,
  formMode,
  toggleForm,
  forceToggleForm
}) => {
  const dispatch = useDispatch();
  const [formItem, onUpdateField, onUpdateFormItem] = useUpdateDeepItem(item);

  const elemRef = useRef(null);

  useEffect(() => {
    if (elemRef) {
      setElemRef(elemRef);
    }
  });

  const setElemRef = useKeyboardEvent(27, elemRef, () => {
    console.log("handleEsc");
    onUpdateFormItem(item);
    forceToggleForm(false);
  });

  const handleSubmit = e => {
    console.log("handleSubmit", formItem);
    e.preventDefault();
    if (formItem.title !== "") {
      if (formMode === "new") {
        dispatch(
          onCreateCard({ ...formItem, idList }, () => {
            onUpdateFormItem({ title: "", description: "" });
            forceToggleForm(false);
          })
        );
      } else {
        dispatch(onUpdateCard(formItem, () => forceToggleForm(false)));
      }
    } else {
      forceToggleForm(false);
    }
  };

  const handleCancel = e => {
    console.log("handleCancel");
    if (!formItem.id) {
      onUpdateFormItem({ title: "", description: "" });
    }
    forceToggleForm(false);
  };

  const moveFocusToEnd = e => {
    let tempValue = e.target.value;
    e.target.value = "";
    e.target.value = tempValue;
  };

  return (
    <CardComposer
      status={status}
      formIsOn={formIsOn}
      formItem={formItem}
      nbCards={nbCards}
      formMode={formMode}
      handleChange={onUpdateField}
      handleSubmit={handleSubmit}
      handleCancel={handleCancel}
      onToggleForm={toggleForm}
      moveFocusToEnd={moveFocusToEnd}
      formElemRef={elemRef}
    />
  );
};

CardComposerContainer.defaultProps = {
  item: { title: "", description: "" },
  formIsOn: false,
  formMode: "new"
};

CardComposerContainer.propTypes = {
  status: PropTypes.oneOf(["List", "Card"]).isRequired,
  item: PropTypes.object,
  idList: PropTypes.number.isRequired,
  nbCards: PropTypes.number,
  formIsOn: PropTypes.bool,
  formMode: PropTypes.oneOf(["new", "edit"]),
  toggleForm: PropTypes.func.isRequired
};

export default CardComposerContainer;
