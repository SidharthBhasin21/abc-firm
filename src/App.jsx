import { useEffect, useState } from "react";
import "./App.css";
import SpeechToText from "./SpeechToText";
import Sidebar from "./sections/Sidebar";

import Header from "./sections/Header";
import MainSection from "./sections/MainSection";
import UploadModal from "./sections/UploadModal";
import axios from "axios";
import TansModel from "./sections/TransModel";
import TransModel from "./sections/TransModel";
const API_KEY = "b0QaTD7otyxGg4pj1yKIayzFplTDCTYK";
const apiUrl = "https://asr.api.speechmatics.com/v2/jobs/";

function App() {
  const [isModelVisible, setIsModalVisible] = useState(false);
  const [isTransModelVisible, setTransIsModalVisible] = useState(false);
  const [transcription, setTranscription] = useState("");
  const [tableData, setTableData] = useState([]);
  const [response, setResponse] = useState(null);
  const [file, setFile] = useState(null);

  useEffect(() => {
    let arr = JSON.parse(localStorage.getItem("fileArray"));
    if (arr) {
      setTableData(arr);
    }
  }, []);

  const showTransModal = () => {
    setTransIsModalVisible(true);
  };
  const hideTransModal = () => {
    setTransIsModalVisible(false);
  };
  const showModal = () => {
    setIsModalVisible(true);
  };

  const hideModal = () => {
    setIsModalVisible(false);
  };
  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    // event.preventDefault();

    const formData = new FormData();
    formData.append("data_file", file);
    formData.append(
      "config",
      JSON.stringify({
        type: "transcription",
        transcription_config: {
          operating_point: "enhanced",
          language: "en",
        },
      })
    );

    fetch(apiUrl, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        setResponse(data);
        setIsModalVisible(false);

        let arr = [
          ...tableData,
          {
            id: data.id,
            name: file.name,
            lastModifiedDate: file.lastModifiedDate,
            type: file.type,
          },
        ];
        setTableData(arr);
        console.log("cccc", file);
        localStorage.setItem("fileArray", JSON.stringify(arr));
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const handleTranscription = async (id) => {
    console.log(id);
    setTransIsModalVisible(true);
    const apiUrl = `https://asr.api.speechmatics.com/v2/jobs/${id}/transcript?format=txt`;

    try {
      await axios
        .get(apiUrl, {
          headers: {
            Authorization: `Bearer ${API_KEY}`,
          },
        })
        .then((response) => {
          setTranscription(response.data);
          console.log("Data", response.data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    } catch (error) {
      console.log("Error:", error);
    }
  };

  return (
    <>
      <div className="body-container">
        <Sidebar />
        <div>
          <Header />
          <MainSection
            showModal={showModal}
            hideModal={hideModal}
            tableData={tableData}
            handleTranscription={handleTranscription}
          />
        </div>
      </div>
      <UploadModal
        isModelVisible={isModelVisible}
        hideModal={hideModal}
        file={file}
        setFile={setFile}
        handleFileChange={handleFileChange}
        handleSubmit={handleSubmit}
      />
      <TransModel
        isTransModelVisible={isTransModelVisible}
        data={transcription}
        hideTransModal={hideTransModal}
      />
    </>
  );
}

export default App;
