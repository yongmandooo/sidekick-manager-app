import React, { useEffect } from "react";
import NextActionBtn from "./nextActionBtn";

const Request = (props) => {
  const data = props.data;

  useEffect(() => {
    props.setCurrentId(props.currentId);
  }, [props]);

  let stateContent = null;
  if (data.state === "reservation-requested") {
    stateContent = <p className="flex-1 flex justify-center">예약 신청</p>;
  } else if (data.state === "manager-allocated") {
    if (new Date() > new Date(data.workDay)) {
      stateContent = (
        <p className="flex-1 flex justify-center text-[#FF4343]">
          작업 시간 종료
        </p>
      );
    } else {
      stateContent = <p className="flex-1 flex justify-center">매니저 배정</p>;
    }
  } else if (data.state === "work-finished") {
    if (data.isReported) {
      stateContent = (
        <p className="flex-1 flex justify-center">리포트 발송 완료</p>
      );
    } else {
      stateContent = (
        <p className="flex-1 flex justify-center text-[#FF4343]">리포트 대기</p>
      );
    }
  } else if (data.state === "cancelled") {
    stateContent = <p className="flex-1 flex justify-center">작업 취소</p>;
  }

  return (
    <>
      <div className="flex py-1 border-b border-gray-600">
        <p className="flex-1 flex justify-center">{data.order}</p>
        <p className="flex-1 flex justify-center">{data.name}</p>
        <p className="flex-1 flex justify-center">{data.cyclity}</p>
        <p className="flex-1 flex justify-center">{data.workDay}</p>
        <p className="flex-1 flex justify-center">{data.workTime}</p>
        <p className="flex-1 flex justify-center">{data.price}</p>
        {stateContent}
        <p className="flex-1 flex justify-center">
          {data.manager ? data.manager : "-"}
        </p>
        <div className="flex-1 flex justify-center">
          <NextActionBtn
            text="열기"
            onClickFunc={(e) => {
              e.preventDefault();
              props.setCurrentId(data.id);
            }}
          />
        </div>
      </div>
    </>
  );
};

export default Request;
