import React from "react";

const CleaningContent = (props) => {
  let space = "";
  if (props.cleaningSpace === "bathroom") {
    space = "화장실";
  } else if (props.cleaningSpace === "kitchen") {
    space = "주방";
  } else if (props.cleaningSpace === "livingroom") {
    space = "방/거실";
  } else if (props.cleaningSpace === "etc") {
    space = "기타";
  }
  const todo = props.cleaningTodo;
  return (
    <div className="border-b border-black">
      {todo.map((item, index) => {
        if (index === 0) {
          return (
            <div key={index} className="flex justify-between py-2">
              <div className="font-bold">{space}</div>
              <div className="border-b border-black">{item.name}</div>
            </div>
          );
        } else {
          return (
            <div key={index} className="flex flex-row-reverse py-2">
              <div className="border-b border-black">{item.name}</div>
            </div>
          );
        }
      })}
    </div>
  );
};

export default CleaningContent;
