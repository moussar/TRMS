import React from "react";
import { useDispatch } from "react-redux";
import { useToggle } from "../../hooks";
import { onToggle, onUpdateModal } from "../../store/actions/ui";
import Card from "../ui/Card";
import CardComposer from "../containers/cardComposer";
import { Draggable } from "react-beautiful-dnd";

const CardContainer = ({ index, ...card }) => {
  const dispatch = useDispatch();
  const [toggleForm, formIsOn, forceToggleForm] = useToggle(false);

  if (!formIsOn) {
    return (
      <Draggable draggableId={String(card.id)} index={index}>
        {provided => (
          <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            <Card
              {...card}
              toggleModal={() => {
                dispatch(onUpdateModal("viewTask", { ...card }));
                dispatch(onToggle("modal"));
              }}
              toggleForm={toggleForm}
            />
          </div>
        )}
      </Draggable>
    );
  } else {
    return (
      <CardComposer
        item={card}
        status="Card"
        formMode="edit"
        formIsOn={formIsOn}
        toggleForm={toggleForm}
        forceToggleForm={forceToggleForm}
        idList={card.idList}
      />
    );
  }
};

export default CardContainer;
