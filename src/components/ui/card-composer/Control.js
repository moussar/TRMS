import React from "react";

const ComposerControl = ({ nbCards, onToggleForm }) => {
  return (
    <div className="card-composer-container">
      <span className="btn-card-composer" onClick={onToggleForm}>
        <span className="icon-sm icon-add" />
        {nbCards ? <span>Add another card</span> : <span>Add a card</span>}
      </span>
      <div className="card-templates-button-container dark-background-hover">
        <div>
          <a className="_2arBFfwXVxA0AM" role="button" href="/">
            <span className="icon-sm icon-template-card dark-background-hover" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ComposerControl;
