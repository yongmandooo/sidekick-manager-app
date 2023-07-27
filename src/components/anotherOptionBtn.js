import React from "react";

const AnotherOptionBtn = (props) => {
  return (
    <button
      className="bg-[#EAEAEA] font-medium px-3 rounded"
      onClick={props.onClickFunc}
    >
      {props.text}
    </button>
  );
};

export default AnotherOptionBtn;
