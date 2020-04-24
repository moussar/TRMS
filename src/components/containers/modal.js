import React from "react";
import { connect } from "react-redux";
import { onToggle } from "../../store/actions/ui";
import Modal from "../ui/Modal";

const ModalContainer = ({ onToggle, ui }) => {
  return (
    <>
      <Modal
        item={ui.modal["viewTask"]}
        onToggleModal={() => onToggle("modal")}
      />
    </>
  );
};

export default connect(
  state => ({ ui: state.ui }),
  { onToggle }
)(ModalContainer);
