import React, { useRef } from "react";

const ComposerForm = ({
  formItem,
  formMode,
  handleChange,
  handleSubmit,
  handleCancel,
  moveFocusToEnd,
  formElemRef
}) => {
  return (
    <div className="card-composer-editor">
      <form onSubmit={handleSubmit} onMouseLeave={handleSubmit}>
        <div className="card">
          <div className="card-details">
            <textarea
              name="title"
              className="card-details-textarea"
              placeholder="Enter a title for this card…"
              value={formItem.title}
              onChange={handleChange}
              onFocus={moveFocusToEnd}
              autoFocus
              ref={formElemRef}
            />
          </div>
        </div>
        <div className="card-buttons">
          <button className="card-button-add" type="submit">
            {formMode === "new" ? "Add Card" : "Update Card"}
          </button>
          <button
            className="card-button-remove icon-lg icon-close dark-hover"
            onClick={handleCancel}
          />
          <button className="card-button-more icon-lg icon-overflow-menu-horizontal" />
        </div>
      </form>
    </div>
  );
};

export default ComposerForm;
