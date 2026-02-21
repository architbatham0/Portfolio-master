import React from "react";

const CommonModal = ({
  modalId,
  title,
  imageSrc,
}) => {
  return (
    <div
      className="modal fade"
      id={modalId}
      tabIndex="-1"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content">

          {/* Header */}
          <div className="modal-header">
            <h5 className="modal-title">{title}</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>

          {/* Body */}
          <div className="modal-body text-center">
            <img
              src={imageSrc}
              alt={title}
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "12px",
              }}
            />
          </div>

        </div>
      </div>
    </div>
  );
};

export default CommonModal;
