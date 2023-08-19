import React, { useEffect, useState } from "react";
import CleaningTable from "./cleaning-table/cleaningTable";
import DetailInformation from "./detail-information/detailInformation";
import NextActionBtn from "../buttons/nextActionBtn";
import AlertBtn from "../buttons/alertBtn";
import AnotherOptionBtn from "../buttons/anotherOptionBtn";
import ReportModal from "./reportModal";
import axios from "axios";

const DetailsModal = (props) => {
  const [data, setData] = useState({});
  const [isOpenReportModal, setIsOpenReportModal] = useState(false);
  const [manager, setManager] = useState("");
  useEffect(() => {
    props.setCurrentId(props.currentId);
    getCleaningSessionDetails(props.currentId);
  }, [props]);

  const getCleaningSessionDetails = async (currentId) => {
    await axios({
      method: "get",
      url: `http://localhost:8080/api/admin/cleaning_session`,
      params: {
        cleaning_session_id: currentId,
      },
    })
      .then(function (response) {
        if (response.data.visit_timestamp) {
          response.data.visit_timestamp = response.data.visit_timestamp.substr(
            0,
            19
          );
          response.data.visit_timestamp = response.data.visit_timestamp.replace(
            "T",
            " "
          );
        }
        console.log(response.data);
        setData(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const saveManager = async (managerName) => {
    await axios({
      method: "put",
      url: `http://localhost:8080/api/admin/manager`,
      data: {
        cleaning_session_id: props.currentId,
        manager: managerName,
      },
    })
      .then(function (response) {
        console.log(response.status);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const changeState = async (stateNum) => {
    await axios({
      method: "put",
      url: `http://localhost:8080/api/admin/state`,
      data: {
        cleaning_session_id: props.currentId,
        state: stateNum,
      },
    })
      .then(function (response) {
        console.log(response.status);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const daysStringify = (days) => {
    let str = "";
    for (var i = 0; i < days.length; i++) {
      if (days[i] === 0) {
        str += "월요일";
      } else if (days[i] === 1) {
        str += "화요일";
      } else if (days[i] === 2) {
        str += "수요일";
      } else if (days[i] === 3) {
        str += "목요일";
      } else if (days[i] === 4) {
        str += "금요일";
      } else if (days[i] === 5) {
        str += "토요일";
      } else if (days[i] === 6) {
        str += "일요일";
      }

      if (i !== days.length - 1) {
        str += ", ";
      }
    }

    return str;
  };

  let stateContent = null;
  let nextButtonContent = null;
  if (data.state === 1) {
    stateContent = <p className="flex-1 flex justify-center">예약 신청</p>;
    nextButtonContent = (
      <NextActionBtn
        text="매칭 완료"
        onClickFunc={(e) => {
          e.preventDefault();
          changeState(2);
          window.location.reload();
        }}
      />
    );
  } else if (data.state === 2) {
    console.log(new Date(data.visit_timestamp));
    if (new Date() > new Date(data.visit_timestamp)) {
      stateContent = (
        <p className="flex-1 flex justify-center text-[#FF4343]">
          작업 시간 종료
        </p>
      );
      nextButtonContent = (
        <NextActionBtn
          text="작업 완료"
          onClickFunc={(e) => {
            e.preventDefault();
            changeState(3);
            window.location.reload();
          }}
        />
      );
    } else {
      stateContent = <p className="flex-1 flex justify-center">매니저 배정</p>;
    }
  } else if (data.state === 4) {
    stateContent = (
      <p className="flex-1 flex justify-center">리포트 발송 완료</p>
    );
  } else if (data.state === 3) {
    stateContent = (
      <p className="flex-1 flex justify-center text-[#FF4343]">리포트 대기</p>
    );
    nextButtonContent = (
      <NextActionBtn
        text="리포트 작성"
        onClickFunc={() => setIsOpenReportModal(true)}
      />
    );
  } else if (data.state === 9) {
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
                <p className="flex-1 flex justify-center">이름</p>
                <p className="flex-1 flex justify-center">정기여부</p>
                <p className="flex-1 flex justify-center">작업일</p>
                <p className="flex-1 flex justify-center">작업 시간</p>
                <p className="flex-1 flex justify-center">거래액</p>
                <p className="flex-1 flex justify-center">상태</p>
                <p className="flex-1 flex justify-center">매니저</p>
              </div>
              <div className="flex text-md py-1">
                <p className="flex-1 flex justify-center">{data.username}</p>
                <p className="flex-1 flex justify-center">
                  {data.regular_cleaning &&
                    (data.regular_cleaning.is_regular
                      ? (data.regular_cleaning.interval_week
                          ? "격주 "
                          : "매주 ") +
                        daysStringify(data.regular_cleaning.interval_weekdays)
                      : "1회성")}
                </p>
                <p className="flex-1 flex justify-center">
                  {data.visit_timestamp}
                </p>
                <p className="flex-1 flex justify-center">
                  {data.sum_duration}({Math.ceil(data.sum_duration / 60)})
                </p>
                <p className="flex-1 flex justify-center">
                  {data.sell_price?.toLocaleString()}
                </p>
                {stateContent}
                <p className="flex-1 flex justify-center">
                  {data.manager ? data.manager : "-"}
                </p>
              </div>
            </div>
            <div className="flex-auto flex overflow-hidden">
              <CleaningTable
                key={props.currentId}
                currentId={props.currentId}
                cleaningList={data.cleaning_list}
                mission={data.missions}
                state={data.state}
              />
              <div className="flex-1">
                <div className="py-8 px-6">
                  <DetailInformation details={data} />
                  <div className="flex justify-between items-center mb-4">
                    <p className="text-xl font-medium">매니저</p>
                    {data.state === 1 || data.state === 2 ? (
                      <div className="border border-black rounded flex justify-between gap-2 px-2 py-1">
                        <input
                          className="border-none grow"
                          placeholder={data.manager ?? data.manager}
                          onChange={(e) => setManager(e.target.value)}
                        ></input>
                        <NextActionBtn
                          text={data.state === 1 ? "저장" : "수정"}
                          onClickFunc={(e) => {
                            e.preventDefault();
                            saveManager(manager);
                            window.location.reload();
                          }}
                        />
                      </div>
                    ) : (
                      <p>{data.manager}</p>
                    )}
                  </div>
                  <div className="flex justify-between items-center py-6">
                    {data.state === 1 || data.state === 2 ? (
                      <AlertBtn
                        text="작업 취소/환불"
                        onClickFunc={(e) => {
                          e.preventDefault();
                          changeState(9);
                          window.location.reload();
                        }}
                      />
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
      {isOpenReportModal && (
        <ReportModal
          currentId={props.currentId}
          isOpenReportModal={isOpenReportModal}
          setIsOpenReportModal={setIsOpenReportModal}
        />
      )}
    </>
  );
};

export default DetailsModal;
