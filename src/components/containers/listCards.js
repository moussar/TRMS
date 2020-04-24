import React, { useMemo } from "react";
import { Droppable } from "react-beautiful-dnd";

import { connect } from "react-redux";
import { denormalize } from "../../utlis";
import { useToggle } from "../../hooks";
import ListCards from "../ui/ListCards";

const ListCardsContainer = ({ cards, list }) => {
  const [toggleForm, formIsOn, forceToggleForm] = useToggle(false);
  const data = useMemo(
    () => denormalize(cards).filter(card => card.idList === list.id),
    [cards, list.id]
  );
  return (
    <Droppable droppableId={String(list.id)}>
      {provided => (
        <div {...provided.droppableProps} ref={provided.innerRef}>
          <ListCards
            data={data}
            idList={list.id}
            toggleForm={toggleForm}
            formIsOn={formIsOn}
            forceToggleForm={forceToggleForm}
          />
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};

export default connect((state, ownProps) => ({
  cards: state.card.cards
}))(ListCardsContainer);
