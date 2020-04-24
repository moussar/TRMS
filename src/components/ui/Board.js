import React from "react";
import ListsContainer from "../containers/lists";
import BoardHeader from "./Boardheader";

const Board = () => {
  return (
    <div className="content">
      <div className="board-wrapper">
        <div className="board-main-content">
          <BoardHeader />
          <div className="board-canvas">
            <div className="board">
              <ListsContainer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Board;
