import React, { useState } from "react";

const SpeechToText = () => {
  const [transcript, setTranscript] = useState("");

  const startListening = () => {
    const recognition = new window.webkitSpeechRecognition();
    recognition.lang = "en-US"; // Set the language here
    recognition.onresult = (event) => {
      setTranscript(event.results[0][0].transcript);
    };
    recognition.start();
  };

  return (
    <div>
      <button onClick={startListening}>Start Listening</button>
      <p>{transcript}</p>
    </div>
  );
};

export default SpeechToText;
