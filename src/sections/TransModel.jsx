import React from "react";

import cross from "../assets/icons/multiply.svg";
const TransModel = ({ isTransModelVisible, data, hideTransModal }) => {
  return (
    isTransModelVisible && (
      <div className="modal">
        <div className="modal-content">
          <div className="transcription-text">
            <h2>Transctiption Modal</h2>{" "}
            <img src={cross} onClick={() => hideTransModal()} />
          </div>
          <p className="text">{data ? data : `Loading...`}</p>
        </div>
      </div>
    )
  );
};

export default TransModel;
