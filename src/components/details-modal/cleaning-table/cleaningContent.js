import React from "react";

const CleaningContent = (props) => {
  const space = props.cleaningSpace;
  const todo = props.cleaningTodo;
  return (
    <div className="border-b border-black">
      {todo.map((item, index) => {
        if (index === 0) {
          return (
            <div key={index} className="flex justify-between py-2">
              <div className="font-bold">{space}</div>
              <div className="border-b border-black">{item}</div>
            </div>
          );
        } else {
          return (
            <div key={index} className="flex flex-row-reverse py-2">
              <div className="border-b border-black">{item}</div>
            </div>
          );
        }
      })}
    </div>
  );
};

export default CleaningContent;
