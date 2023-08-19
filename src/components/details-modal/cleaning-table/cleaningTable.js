import React, { useState } from "react";
import NextActionBtn from "../../buttons/nextActionBtn";
import CleaningContent from "./cleaningContent";
import axios from "axios";

const CleaningTable = (props) => {
  const cleaningList = props.cleaningList;
  const [mission, setMission] = useState("");
  const saveMission = async (methodStr, mission) => {
    await axios({
      method: methodStr,
      url: `http://localhost:8080/api/admin/mission`,
      data: {
        cleaning_session_id: props.currentId,
        description: mission,
      },
    })
      .then(function (response) {
        console.log(response.status);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const missionStringify = (missionArr) => {
    let missionStr = "";
    for (let obj of missionArr) {
      missionStr += obj.description ? obj.description : "";
    }
    return missionStr;
  };
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
            {props.state === 1 || props.state === 2 ? (
              <div className="border border-black rounded flex justify-between gap-2 px-2 py-1 w-3/4">
                <input
                  className="border-none grow"
                  placeholder={props.mission && missionStringify(props.mission)}
                  onChange={(e) => {
                    setMission(e.target.value);
                  }}
                ></input>
                <NextActionBtn
                  text={props.state === 1 ? "저장" : "수정"}
                  onClickFunc={(e) => {
                    e.preventDefault();
                    saveMission(props.state === 1 ? "post" : "put", mission);
                    window.location.reload();
                  }}
                />
              </div>
            ) : (
              <div className="border-b border-black">
                {props.mission && missionStringify(props.mission)}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CleaningTable;
