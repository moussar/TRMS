import React from "react";
import ComposerForm from "./Form";
import ComposerControl from "./Control";

const ListComposer = ({
  status,
  formItem,
  nbLists,
  formIsOn,
  formMode,
  handleChange,
  handleSubmit,
  handleCancel,
  onToggleForm,
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
        formElemRef={formElemRef}
      />
    );
  } else {
    if (status === "Board") {
      return <ComposerControl nbLists={nbLists} onToggleForm={onToggleForm} />;
    }
  }
  return <></>;
};

export default ListComposer;
