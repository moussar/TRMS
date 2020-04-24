import React from "react";
import Card from "../containers/card";
import CardComposer from "../containers/cardComposer";
import { Droppable } from "react-beautiful-dnd";

const ListCards = ({ data, idList, toggleForm, formIsOn, forceToggleForm }) => {
  return (
    <div className="list-cards">
      <Droppable droppableId={String(idList)}>
        {provided => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            {data.map((card, index) => (
              <Card key={card.id} {...card} index={index} />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
      <CardComposer
        status="List"
        nbCards={data.length}
        idList={idList}
        toggleForm={toggleForm}
        formIsOn={formIsOn}
        forceToggleForm={forceToggleForm}
      />
    </div>
  );
};

export default ListCards;
