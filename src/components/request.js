import React, { useEffect } from "react";
import NextActionBtn from "./buttons/nextActionBtn";

const Request = (props) => {
  const data = props.data;
  const order = props.order + 1;

  useEffect(() => {
    props.setCurrentId(props.currentId);
  }, [props]);

  let stateContent = null;
  if (data.state === 1) {
    stateContent = <p className="flex-1 flex justify-center">예약 신청</p>;
  } else if (data.state === 2) {
    if (new Date() > new Date(data.workDay)) {
      stateContent = (
        <p className="flex-1 flex justify-center text-[#FF4343]">
          작업 시간 종료
        </p>
      );
    } else {
      stateContent = <p className="flex-1 flex justify-center">매니저 배정</p>;
    }
  } else if (data.state === 3) {
    stateContent = (
      <p className="flex-1 flex justify-center">리포트 발송 완료</p>
    );
  } else if (data.state === 4) {
    stateContent = (
      <p className="flex-1 flex justify-center text-[#FF4343]">리포트 대기</p>
    );
  } else if (data.state === 9) {
    stateContent = <p className="flex-1 flex justify-center">작업 취소</p>;
  }

  return (
    <>
      <div className="flex py-1 border-b border-gray-600">
        <p className="flex-1 flex justify-center">{order}</p>
        <p className="flex-1 flex justify-center">{data.name}</p>
        <p className="flex-1 flex justify-center">{data.cyclity}</p>
        <p className="flex-1 flex justify-center">{data.workDay}</p>
        <p className="flex-1 flex justify-center">
          {data.workTime}({Math.ceil(data.workTime / 60)})
        </p>
        <p className="flex-1 flex justify-center">
          {data.price.toLocaleString()}
        </p>
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
