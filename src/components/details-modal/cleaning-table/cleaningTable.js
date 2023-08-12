import React from "react";
import NextActionBtn from "../../buttons/nextActionBtn";
import CleaningContent from "./cleaningContent";

const CleaningTable = (props) => {
  const cleaningList = props.cleaningList;
  return (
    <div className="flex-1 border-r-2 border-black">
      <div className="px-8 pb-8 h-full overflow-y-scroll">
        <p className="text-xl font-bold py-4">청소 항목</p>
        {cleaningList &&
          Object.keys(cleaningList).map((key, index) => {
            if (cleaningList[key].length > 0) {
              return (
                <CleaningContent
                  key={index}
                  cleaningSpace={key}
                  cleaningTodo={cleaningList[key]}
                />
              );
            } else {
              return <></>;
            }
          })}
        <div>
          <div className="flex justify-between py-2 items-center">
            <div className="font-bold">미션</div>
            {props.state === "reservation-requested" ||
            props.state === "manager-allocated" ? (
              <div className="border border-black rounded flex justify-between gap-2 px-2 py-1 w-3/4">
                <input
                  className="border-none grow"
                  placeholder={props.mission ?? props.mission}
                ></input>
                <NextActionBtn
                  text={
                    props.state === "reservation-requested" ? "저장" : "수정"
                  }
                />
              </div>
            ) : (
              <div className="border-b border-black">
                {props.mission ?? props.mission}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CleaningTable;
