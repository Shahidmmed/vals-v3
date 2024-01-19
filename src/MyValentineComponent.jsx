import React, { useState } from "react";
import "./MyValentineComponent.scss";

const MyValentineComponent = () => {
  const [answerSelected, setAnswerSelected] = useState(false);

  const handleAnswerChange = () => {
    setAnswerSelected(true);
    // Add logic to play the audio here
    const audio = new Audio(
      "https://toptrack-assets.s3.eu-central-1.amazonaws.com/i-just-called-comp.mp3"
    );
    audio.play();
  };
  return (
    <div className="centered">
      <h4>Will you be My Valentine?</h4>

      <input
        className="no"
        type="checkbox"
        name="answer"
        id="No"
        onChange={handleAnswerChange}
      />
      <label htmlFor="No" className="label-no">
        Nope
      </label>

      <input
        className="yes"
        type="checkbox"
        name="answer"
        id="Yes"
        onChange={handleAnswerChange}
      />
      <label htmlFor="Yes" className="label-yes">
        Yes
      </label>

      <div className="answer--yes"></div>
      <div className="answer--no"></div>

      <div className="signature">
        <p>
          Made for you with <i className="much-heart"></i>
        </p>
      </div>
    </div>
  );
};

export default MyValentineComponent;
