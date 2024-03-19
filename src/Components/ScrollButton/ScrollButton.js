import React from "react";
import "../ScrollButton/ScrollButton.css";
import { MdOutlineArrowUpward } from "react-icons/md";
import { MdOutlineArrowDownward } from "react-icons/md";

const ScrollButton = () => {
  function handleScrollUp() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  function handleScrollDown() {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  }

  return (
    <div className="scroll-buttons-overlay">
      <button
        className="scroll-button scroll-button-up"
        onClick={() => handleScrollUp()}
        title="scr"
      >
        <MdOutlineArrowUpward />
      </button>
      <button
        className="scroll-button scroll-button-down"
        onClick={() => handleScrollDown()}
        title="scr"
      >
        <MdOutlineArrowDownward />
      </button>
    </div>
  );
};

export default ScrollButton;
