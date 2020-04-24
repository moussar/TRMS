import React from "react";

const ListHeader = ({ title, toggleForm }) => {
  return (
    <div className="list-header" onClick={toggleForm}>
      <h2>{title}</h2>
      <div className="list-header-extras">
        <a
          className="list-header-extras-menu dark-hover icon-sm icon-overflow-menu-horizontal"
          href="/"
        >
          <span />
        </a>
      </div>
    </div>
  );
};

export default ListHeader;
