import React, { useEffect } from "react";
import { DragDropContext } from "react-beautiful-dnd";

import { connect } from "react-redux";
import { denormalize } from "../../utlis";
import { useToggle } from "../../hooks";
import * as listActions from "../../store/actions/list";
import Lists from "../ui/Lists";

const ListsContainer = ({ data, onGetLists }) => {
  const [toggleForm, formIsOn, forceToggleForm] = useToggle(false);

  useEffect(() => {
    onGetLists();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <DragDropContext
      onDragEnd={result => console.log("Drag end Called!", result)}
    >
      <Lists
        data={data}
        toggleForm={toggleForm}
        formIsOn={formIsOn}
        forceToggleForm={forceToggleForm}
      />
    </DragDropContext>
  );
};

export default connect(
  state => ({ data: denormalize(state.list.lists) }),
  { ...listActions }
)(ListsContainer);
