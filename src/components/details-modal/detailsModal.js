import React, { useEffect } from "react";
import CleaningTable from "./cleaning-table/cleaningTable";
import DetailInformation from "./detail-information/detailInformation";
import NextActionBtn from "../buttons/nextActionBtn";
import AlertBtn from "../buttons/alertBtn";
import AnotherOptionBtn from "../buttons/anotherOptionBtn";

const DetailsModal = (props) => {
  const data = props.data[0];
  useEffect(() => {
    props.setCurrentId(props.currentId);
  }, [props]);

  let stateContent = null;
  let nextButtonContent = null;
  if (data.state === "reservation-requested") {
    stateContent = <p className="flex-1 flex justify-center">예약 신청</p>;
    nextButtonContent = <NextActionBtn text="매칭 완료" />;
  } else if (data.state === "manager-allocated") {
    if (new Date() > new Date(data.workDay)) {
      stateContent = (
        <p className="flex-1 flex justify-center text-[#FF4343]">
          작업 시간 종료
        </p>
      );
      nextButtonContent = <NextActionBtn text="작업 완료" />;
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
      nextButtonContent = <NextActionBtn text="리포트 작성" />;
    }
  } else if (data.state === "cancelled") {
    stateContent = <p className="flex-1 flex justify-center">작업 취소</p>;
  }

  return (
    <>
      <div className="fixed inset-0 bg-black opacity-50 h-screen w-screen" />
      <div className="fixed inset-0 h-screen w-screen flex justify-center items-center">
        <div className="h-[90%] w-[90%] bg-white rounded-xl flex justify-center items-center">
          <div className="flex flex-col border border-black h-[95%] w-[95%]">
            <div className="grow-0 border-b-2 border-black py-4">
              <div className="flex text-lg font-medium py-1">
                <p className="flex-1 flex justify-center">순번</p>
                <p className="flex-1 flex justify-center">이름</p>
                <p className="flex-1 flex justify-center">정기여부</p>
                <p className="flex-1 flex justify-center">작업일</p>
                <p className="flex-1 flex justify-center">작업 시간</p>
                <p className="flex-1 flex justify-center">거래액</p>
                <p className="flex-1 flex justify-center">상태</p>
                <p className="flex-1 flex justify-center">매니저</p>
              </div>
              <div className="flex text-md py-1">
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
              </div>
            </div>
            <div className="flex-auto flex overflow-hidden">
              <CleaningTable
                cleaningContents={data.cleaningContents}
                mission={data.mission}
                state={data.state}
              />
              <div className="flex-1">
                <div className="py-8 px-6">
                  <DetailInformation details={data.details} />
                  <div className="flex justify-between items-center mb-4">
                    <p className="text-xl font-medium">매니저</p>
                    {data.state === "reservation-requested" ||
                    data.state === "manager-allocated" ? (
                      <div className="border border-black rounded flex justify-between gap-2 px-2 py-1">
                        <input
                          className="border-none grow"
                          placeholder={data.manager ?? data.manager}
                        ></input>
                        <NextActionBtn
                          text={
                            data.state === "reservation-requested"
                              ? "저장"
                              : "수정"
                          }
                        />
                      </div>
                    ) : (
                      <p>{data.manager}</p>
                    )}
                  </div>
                  <div className="flex justify-between items-center py-6">
                    {data.state === "reservation-requested" ||
                    data.state === "manager-allocated" ? (
                      <AlertBtn text="작업 취소/환불" />
                    ) : (
                      <div />
                    )}
                    <div className="flex gap-4">
                      {nextButtonContent}
                      <AnotherOptionBtn
                        text="닫기"
                        onClickFunc={(e) => {
                          e.preventDefault();
                          props.setCurrentId(null);
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailsModal;
