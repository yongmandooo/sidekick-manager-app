import React from "react";

const NextActionBtn = (props) => {
  return (
    <button
      className="bg-[#00ADB5] text-white font-medium px-3 rounded"
      onClick={props.onClickFunc}
    >
      {props.text}
    </button>
  );
};

export default NextActionBtn;
