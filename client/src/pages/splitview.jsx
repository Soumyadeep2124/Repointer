import React, { useState, useRef } from "react";

const SplitView = () => {
  const [leftWidth, setLeftWidth] = useState(300); // initial left panel width
  const isResizing = useRef(false);

  const handleMouseDown = () => {
    isResizing.current = true;
  };

  const handleMouseMove = (e) => {
    if (!isResizing.current) return;
    setLeftWidth(e.clientX); // resize based on mouse X position
  };

  const handleMouseUp = () => {
    isResizing.current = false;
  };

  return (
    <div
      className="flex w-full h-screen"
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      {/* Left Panel */}
      <div style={{ width: `${leftWidth}px` }} className="bg-[#1e1e2f] p-4">
      </div>

      {/* Splitter */}
      <div
        className="bg-gray-400 hover:bg-gray-500 cursor-col-resize"
        style={{ width: "5px" }}
        onMouseDown={handleMouseDown}
      ></div>

      {/* Right Panel */}
      <div className="flex-1 bg-[#0f0f1f] p-4">
      </div>
    </div>
  );
};

export default SplitView;
