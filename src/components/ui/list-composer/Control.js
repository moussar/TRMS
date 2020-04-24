import React from "react";

const ComposerControl = ({ nbLists, onToggleForm }) => {
  return (
    <div className="list-wrapper list-empty-btn">
      <span className="btn-add-list" onClick={onToggleForm}>
        <span className="placeholder">
          <span className="placeholder-icon icon-sm icon-add" />
          {nbLists ? "Add another list" : "Add list"}
        </span>
      </span>
    </div>
  );
};

export default ComposerControl;
