import React from "react";
import NextActionBtn from "./nextActionBtn";

const Request = (props) => {
  return (
    <div className="flex py-1 border-b border-gray-600">
      <p className="flex-1 flex justify-center">{props.order}</p>
      <p className="flex-1 flex justify-center">{props.name}</p>
      <p className="flex-1 flex justify-center">{props.cyclity}</p>
      <p className="flex-1 flex justify-center">{props.workDay}</p>
      <p className="flex-1 flex justify-center">{props.workTime}</p>
      <p className="flex-1 flex justify-center">{props.price}</p>
      <p className="flex-1 flex justify-center">{props.state}</p>
      <p className="flex-1 flex justify-center">{props.manager}</p>
      <div className="flex-1 flex justify-center">
        <NextActionBtn text="열기" />
      </div>
    </div>
  );
};

export default Request;
