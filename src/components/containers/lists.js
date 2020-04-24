import React, { useEffect } from "react";
import { DragDropContext } from "react-beautiful-dnd";

import { connect } from "react-redux";
import { denormalize } from "../../utlis";
import { useToggle } from "../../hooks";
import * as listActions from "../../store/actions/list";

import Lists from "../ui/Lists";

const ListsContainer = ({
  lists,
  cards,
  onGetLists,
  onUpdateListCrads
  //onDeleteCard
}) => {
  const [toggleForm, formIsOn, forceToggleForm] = useToggle(false);

  const handleDragEndCard = result => {
    const {
      draggableId: cardId,
      source: { droppableId: sourceListId },
      destination: {
        droppableId: destinationListId,
        index: destinationPosition
      }
    } = result;
    let card = {
      ...cards[cardId],
      idList: destinationListId,
      position: destinationPosition
    };

    console.log(
      "Drag end Called!",
      cards,
      card,
      //result,
      "cardId : ",
      cardId,
      sourceListId,
      destinationListId
    );
    onUpdateListCrads(card, sourceListId, destinationListId);
    //onDeleteCard()
  };

  useEffect(() => {
    onGetLists();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <DragDropContext onDragEnd={handleDragEndCard}>
      <Lists
        data={lists}
        toggleForm={toggleForm}
        formIsOn={formIsOn}
        forceToggleForm={forceToggleForm}
      />
    </DragDropContext>
  );
};

export default connect(
  state => ({
    lists: denormalize(state.list.lists),
    cards: state.card.cards
  }),
  { ...listActions }
)(ListsContainer);
