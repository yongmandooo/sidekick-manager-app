import "./input.css";
import { ReactComponent as Search } from "./svg/search.svg";
import Request from "./components/request";
import DetailsModal from "./components/details-modal/detailsModal";
import { useEffect, useState, useRef } from "react";
import axios from "axios";

function App() {
  const [mode, setMode] = useState("requested");
  const [currentId, setCurrentId] = useState(null);
  const [content, setContent] = useState(null);
  let initContent = useRef(null);

  useEffect(() => {
    let temp = [];
    if (mode === "requested") {
      temp = [1];
    } else if (mode === "manager-allocated") {
      temp = [2];
    } else if (mode === "work-finished") {
      temp = [3, 4];
    } else if (mode === "cancelled") {
      temp = [9];
    }
    getCleaningSessions(temp);
  }, [mode]); //mode 변경마다 initContent를 초기화

  const getCleaningSessions = async (stateList) => {
    await axios({
      method: "get",
      url: `http://localhost:8080/api/admin/cleaning_session_list`,
      params: {
        state_list: JSON.stringify(stateList),
      },
    })
      .then(function (response) {
        initContent.current = response.data.sort((a, b) => {
          return a.createTime - b.createTime;
        });
        setContent(initContent.current);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const isSameDate = (date1, date2) => {
    return (
      date1.getFullYear() === date2.getFullYear() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getDate() === date2.getDate()
    );
  }; //시간을 제외한 날짜 비교 함수

  const onTextChange = (e) => {
    if (e.target.value === "" || e.target.value === null) {
      setContent(initContent.current);
    } else {
      setContent(
        initContent.current.filter((v) => {
          return (
            v.username.includes(e.target.value) ||
            isSameDate(new Date(e.target.value), new Date(v.workDay))
          );
        })
      );
    }
  }; //검색 텍스트 변경마다 content 필터링
  return (
    <>
      <div className="p-8 h-screen bg-white">
        <div className="text-3xl font-medium mb-8">사이드킥 관리자</div>
        <div className="flex justify-between items-center ml-2 mb-4">
          <div className="flex gap-12 text-xl">
            <div
              className={
                "cursor-pointer " + (mode === "requested" ? "font-bold" : "")
              }
              onClick={(e) => {
                e.preventDefault();
                setMode("requested");
              }}
            >
              예약 신청
            </div>
            <div
              className={
                "cursor-pointer " +
                (mode === "manager-allocated" ? "font-bold" : "")
              }
              onClick={(e) => {
                e.preventDefault();
                setMode("manager-allocated");
              }}
            >
              예약 확정
            </div>
            <div
              className={
                "cursor-pointer " +
                (mode === "work-finished" ? "font-bold" : "")
              }
              onClick={(e) => {
                e.preventDefault();
                setMode("work-finished");
              }}
            >
              작업 완료
            </div>
            <div
              className={
                "cursor-pointer " + (mode === "cancelled" ? "font-bold" : "")
              }
              onClick={(e) => {
                e.preventDefault();
                setMode("cancelled");
              }}
            >
              취소된 작업
            </div>
          </div>
          <div className="px-2.5 py-1.5 flex gap-2.5 items-center bg-gray-200 rounded">
            <input
              type="text"
              className="text-gray-700 bg-gray-200"
              placeholder="이름, 작업일로 검색"
              onChange={onTextChange}
            />
            <Search />
          </div>
        </div>
        <div className="flex bg-gray-300 text-lg py-1">
          <p className="flex-1 flex justify-center">순번</p>
          <p className="flex-1 flex justify-center">이름</p>
          <p className="flex-1 flex justify-center">정기여부</p>
          <p className="flex-1 flex justify-center">작업일</p>
          <p className="flex-1 flex justify-center">작업 시간 - 내부(외부)</p>
          <p className="flex-1 flex justify-center">거래액</p>
          <p className="flex-1 flex justify-center">상태</p>
          <p className="flex-1 flex justify-center">매니저</p>
          <p className="flex-1 flex justify-center">세부 내용 확인</p>
        </div>
        {content &&
          content.map((item, index) => {
            return (
              <Request
                key={index}
                order={index}
                data={item}
                currentId={currentId}
                setCurrentId={setCurrentId}
              />
            );
          })}
      </div>
      {currentId && (
        <DetailsModal currentId={currentId} setCurrentId={setCurrentId} />
      )}
    </>
  );
}

export default App;
