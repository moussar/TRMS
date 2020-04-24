import React from "react";
//import { useDispatch } from "react-redux";
import { useToggle } from "../../hooks";
//import { onToggle, onUpdateModal } from "../../store/actions/ui";
import ListHeader from "../ui/ListHeader";
import ListComposer from "../containers/listComposer";

const ListHeaderContainer = ({ list }) => {
  const [toggleForm, formIsOn, forceToggleForm] = useToggle(false);

  if (!formIsOn) {
    return <ListHeader title={list.title} toggleForm={toggleForm} />;
  } else {
    return (
      <ListComposer
        item={list}
        status="List"
        formMode="edit"
        formIsOn={formIsOn}
        toggleForm={toggleForm}
        forceToggleForm={forceToggleForm}
      />
    );
  }
};

export default ListHeaderContainer;
