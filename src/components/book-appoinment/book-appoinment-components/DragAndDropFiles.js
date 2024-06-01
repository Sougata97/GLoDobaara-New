import React, { useState } from "react";
import _logo1 from "../images/cloud.png";
import "./dragAndDropFiles.css";
const DragAndDropBox = () => {
  const [dragging, setDragging] = useState(false);

  const handleDragEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragging(false);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragging(false);
    // Handle dropped file(s) here
    const files = Array.from(e.dataTransfer.files);
    console.log(files);
  };

  return (
    <div
      className={`drag-and-drop-box ${dragging ? "dragging" : ""}`}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <div className="app-text">
        <h4 className="upload-documents">Upload Documents</h4>
        <h4 className="saved-documents">Saved Documents </h4>
      </div>
      <div className="div1">
        <img src={_logo1} className="cloud-Logo" alt="cloud" />
        <h1 className="first-text"> Drag & Drop</h1>
        <h5 className="second-text">Your Files Or Browse To Upload </h5>
        <h5 className="third-text">
          {" "}
          Only JPEG, PNG and PDF files with max size of 15MB
        </h5>
      </div>
    </div>
  );
};

export default DragAndDropBox;
