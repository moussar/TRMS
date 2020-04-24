import React, { useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useUpdateDeepItem, useKeyboardEvent } from "../../hooks";
import { onCreateList, onUpdateList } from "../../store/actions/list";
import ListComposer from "../ui/list-composer";

const ListComposerContainer = ({
  status,
  item,
  nbLists,
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
    console.log("handleSubmit");
    e.preventDefault();
    if (formItem.title !== "") {
      if (formMode === "new") {
        dispatch(
          onCreateList(formItem, () => {
            onUpdateFormItem({ title: "" });
            forceToggleForm(false);
          })
        );
      } else {
        dispatch(onUpdateList(formItem, () => forceToggleForm(false)));
      }
    } else {
      forceToggleForm(false);
    }
  };

  const handleCancel = e => {
    console.log("handleCancel");
    if (!formItem.id) {
      onUpdateFormItem({ title: "" });
    }
    forceToggleForm(false);
  };

  return (
    <>
      <ListComposer
        status={status}
        formIsOn={formIsOn}
        formItem={formItem}
        nbLists={nbLists}
        formMode={formMode}
        handleChange={onUpdateField}
        handleSubmit={handleSubmit}
        handleCancel={handleCancel}
        onToggleForm={toggleForm}
        formElemRef={elemRef}
      />
    </>
  );
};

ListComposerContainer.defaultProps = {
  item: { title: "" },
  formIsOn: false,
  formMode: "new"
};

export default ListComposerContainer;
