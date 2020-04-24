import React from "react";
import { connect } from "react-redux";

import "./core.css";
import "./styles.css";

import Modal from "./components/containers/modal";
import Header from "./components/ui/Header";
import Board from "./components/ui/Board";

function App({ ui }) {
  const modalIsOpen = ui.isOn["modal"];
  return (
    <div className={modalIsOpen ? "surface modal-up" : "surface"}>
      <Header />
      <Board />
      <Modal />
    </div>
  );
}

export default connect(state => ({ ui: state.ui }))(App);
