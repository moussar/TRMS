import React from "react";
import ComposerForm from "./Form";
import ComposerControl from "./Control";

const CardComposer = ({
  status,
  formItem,
  nbCards,
  formIsOn,
  formMode,
  handleChange,
  handleSubmit,
  handleCancel,
  onToggleForm,
  moveFocusToEnd,
  formElemRef
}) => {
  if (formIsOn) {
    return (
      <ComposerForm
        formItem={formItem}
        formMode={formMode}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        handleCancel={handleCancel}
        moveFocusToEnd={moveFocusToEnd}
        formElemRef={formElemRef}
      />
    );
  } else {
    if (status === "List") {
      return <ComposerControl nbCards={nbCards} onToggleForm={onToggleForm} />;
    }
  }
  return <></>;
};

export default CardComposer;
