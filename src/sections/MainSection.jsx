import React from "react";
import Button from "../component/Button";
import CardSection from "./CardSection";
import dayjs from "dayjs";
import rocket from "../assets/icons/rocket-alt.svg";

const MainSection = ({ showModal, tableData, handleTranscription }) => {
  // console.log("TableData", tableData);
  return (
    <div className="main-section-container">
      <div className="welcome-container">
        <div className="welcome-text">
          <h2>Welocme, Sidharth</h2>
          <p className="info-text">
            Upload your audio and video to convert to text
          </p>
        </div>
        <Button value="Transcribe File" func={showModal} />
      </div>
      <CardSection />
      <div className="table-container">
        <h3>Recent Files</h3>
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Type</th>
              <th>Date Created</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.type}</td>
                <td>{dayjs(item.lastModifiedDate).format("DD/MM/YYYY")}</td>
                <td onClick={() => handleTranscription(item.id)}>
                  <img src={rocket} alt="action" className="action-button" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MainSection;
