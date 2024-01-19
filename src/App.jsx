import { useState } from "react";
import "./App.scss";
import MyValentineComponent from "./MyValentineComponent";

function App() {
  return (
    <>
      <div className="valentine">
        <div id="heart-group-1"></div>
        <div id="heart-group-2"></div>
        <div id="heart-group-3"></div>
        <div id="heart-group-4"></div>
        <div id="star-group-1"></div>
        <div id="star-group-2"></div>
        <div id="star-group-3"></div>
        <div className="heart-fixed heart-xs"></div>
        <div className="heart-fixed heart-sm"></div>
        <div className="heart-fixed heart-lg"></div>
        <div className="overlay">
          <MyValentineComponent />
        </div>
      </div>
    </>
  );
}

export default App;
