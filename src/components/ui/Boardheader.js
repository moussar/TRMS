import React from "react";

const BoardHeader = () => {
  return (
    <div className="board-header">
      <div className="board-header-btn mod-board-name">
        <span className="board-header-btn-text">Driver</span>
        <input
          className="board-name-input"
          spellCheck="false"
          dir="auto"
          maxLength="512"
          value=""
          readOnly={true}
        />
      </div>
      <span className="board-header-btn-divider" />
      <div className="board-header-btns mod-left">
        <div className="board-header-facepile">
          <div className="member">
            <span className="member-initials" title="Mouhssine aregu">
              MA
            </span>
          </div>
          <div className="member">
            <span className="member-initials" title="Hicham Karbal">
              HK
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoardHeader;
