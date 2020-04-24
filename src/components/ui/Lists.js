import React from "react";
import List from "./List";
import ListComposer from "../containers/listComposer";
const Lists = ({ data, toggleForm, formIsOn, forceToggleForm }) => {
  return (
    <>
      {data && data.map(list => <List key={list.id} {...list} />)}
      <ListComposer
        status="Board"
        nbLists={data.length}
        toggleForm={toggleForm}
        formIsOn={formIsOn}
        forceToggleForm={forceToggleForm}
      />
    </>
  );
};

export default Lists;
