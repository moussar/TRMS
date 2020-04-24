import React from "react";

const Modal = ({ item, onToggleModal }) => {
  return (
    <div className="modal-overlay">
      <div className="modal" style={{ display: "block" }}>
        <div className="modal-wrapper">
          <span
            className="icon-md icon-close modal-close-button"
            onClick={onToggleModal}
          />
          <div className="modal-detail">
            <div className="modal-header">
              <span className="modal-header-icon icon-lg icon-card" />
              <div className="modal-title">
                <h2>{item && item.title}</h2>
              </div>
              <div className="modal-inline-title">
                <p className="u-inline-block u-bottom">
                  in list{" "}
                  <a href="/" className="disabled">
                    {item && item.titleList}
                  </a>
                </p>
              </div>
            </div>
            <div className="modal-main">
              <div className="modal-description">
                <div className="modal-description-title">
                  <span className="modal-description-title-icon icon-description icon-lg" />
                  <h3>Description</h3>
                </div>
              </div>
            </div>
            <div className="modal-sidebar">
              <div className="actions">
                <h3>Actions</h3>
                <span className="action-button-link">
                  <span className="icon-sm icon-share" />
                  <span>Share</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
