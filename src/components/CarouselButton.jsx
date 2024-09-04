import React from "react";

const CarouselButton = ({ direction, onClick, disabled }) => {
  return (
    <button
      className={`bg-white dark:bg-inherit  p-2 rounded-full ${
        direction === "left" ? "ml-4" : "mr-4"
      }`}
      onClick={onClick}
      disabled={disabled}
    >
      {direction === "left" ? "<" : ">"}
    </button>
  );
};

export default CarouselButton;
