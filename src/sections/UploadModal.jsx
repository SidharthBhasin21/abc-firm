import React, { useState } from "react";
import Button from "../component/Button";
import cross from "../assets/icons/multiply.svg";
const UploadModal = (props) => {
  const {
    isModelVisible,
    hideModal,

    handleSubmit,
    handleFileChange,
  } = props;

  return (
    isModelVisible && (
      <div className="modal">
        <div className="modal-content">
          <div className="transcription-text">
            <h2> Transcription file</h2>{" "}
            <img src={cross} onClick={() => hideModal()} />
          </div>
          <div className="modal-inputs">
            <div className="dropdown-container">
              <label htmlFor="languages">Transcription Language</label>
              <select name="languages" id="languages" className="dropdown">
                <option value="English">English</option>
                <option value="Hindi">Hindi</option>
                <option value="German">German</option>
                <option value="French">French</option>
              </select>
            </div>
            <div className="file-upload">
              <input type="file" accept="audio/*" onChange={handleFileChange} />
            </div>
            <div className="url-container">
              <label htmlFor="url">Import from Link</label>
              <input
                type="url"
                id="url"
                placeholder="Paste a Drobpox, Google Drive or Youtube URL here"
              />
            </div>
          </div>
          <Button value="Transcribe File" func={handleSubmit} />
        </div>
      </div>
    )
  );
};

export default UploadModal;
