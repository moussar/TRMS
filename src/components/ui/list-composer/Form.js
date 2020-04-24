import React from "react";

const ComposerForm = ({
  formItem,
  formMode,
  handleChange,
  handleSubmit,
  handleCancel,
  formElemRef
}) => {
  return (
    <div
      className={
        formMode === "new"
          ? "list-wrapper list-empty-compose"
          : "list-wrapper list-update-compose"
      }
    >
      <form onSubmit={handleSubmit} onMouseLeave={handleCancel}>
        <div>
          <input
            className="add-list-input"
            type="text"
            name="title"
            placeholder="Enter list title..."
            autoComplete="off"
            autoFocus
            maxLength="512"
            value={formItem.title}
            ref={formElemRef}
            onChange={handleChange}
          />

          <div className="add-list-buttons">
            <button className="add-list-button-add" type="submit">
              {formMode === "new" ? "Add List" : "Update List"}
            </button>
            <button
              className="add-list-button-remove icon-lg icon-close dark-hover"
              onClick={handleCancel}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default ComposerForm;
