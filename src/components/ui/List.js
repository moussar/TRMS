import React from "react";
import ListCards from "../containers/listCards";
import ListHeader from "../containers/listHeader";

const List = ({ id, title, ...rest }) => {
  return (
    <div className="list-wrapper">
      <div className="list">
        <ListHeader list={{ id, title, ...rest }} />
        <ListCards list={{ id, title, ...rest }} />
      </div>
    </div>
  );
};

export default List;
