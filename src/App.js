import "./input.css";
import { ReactComponent as Search } from "./svg/search.svg";
import Request from "./components/request";
import requestedData from "./sample_data/requested.json";
import DetailsModal from "./components/detailsModal";

function App() {
  return (
    <div className="p-8 h-screen bg-white">
      <div className="text-3xl font-medium mb-8">사이드킥 관리자</div>
      <div className="flex justify-between items-center ml-2 mb-4">
        <div className="flex gap-12 text-xl">
          <div className="font-bold">예약 신청</div>
          <div>예약 확정</div>
          <div>작업 완료</div>
          <div>취소된 작업</div>
        </div>
        <div className="px-2.5 py-1.5 flex gap-2.5 items-center bg-gray-200 rounded">
          <input
            type="text"
            className="text-gray-700 bg-gray-200"
            placeholder="이름, 작업일로 검색"
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
      {requestedData.map((item) => {
        return (
          <Request
            order={item.order}
            name={item.name}
            cyclity={item.cyclity}
            workDay={item.workDay}
            workTime={item.workTime}
            price={item.price}
            state={item.state}
            manager={item.manager}
          />
        );
      })}
      {/* <DetailsModal /> */}
    </div>
  );
}

export default App;