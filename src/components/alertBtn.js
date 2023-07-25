import React from "react";

const AlertBtn = (props) => {
  return (
    <button className="bg-[#FF4343] text-white font-medium px-3 rounded">
      {props.text}
    </button>
  );
};

export default AlertBtn;
