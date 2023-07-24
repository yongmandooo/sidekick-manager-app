import './input.css';
import { ReactComponent as Search } from "./svg/search.svg"; 
import Request from "./components/request";
import requestedData from "./sample_data/requested.json";

function App() {
  return (
    <div className="p-8 h-screen bg-white">
      <div className="text-3xl font-medium mb-8">사이드킥 관리자</div>
      <div className="flex justify-between items-center ml-2 mb-4">
        <div className="flex gap-12 text-xl">
          <div className='font-bold'>예약 신청</div>
          <div>예약 확정</div>
          <div>작업 완료</div>
          <div>취소된 작업</div>
        </div>
        <div className="px-2.5 py-1.5 flex gap-2.5 items-center bg-gray-200 rounded">
          <input type="text" className="text-gray-700 bg-gray-200" placeholder="이름, 작업일로 검색"/>
          <Search/>
        </div>
      </div>
      <div className='flex bg-gray-300 text-lg py-1'>
        <p className='flex-1 flex justify-center'>순번</p>
        <p className='flex-1 flex justify-center'>이름</p>
        <p className='flex-1 flex justify-center'>정기여부</p>
        <p className='flex-1 flex justify-center'>작업일</p>
        <p className='flex-1 flex justify-center'>작업 시간 - 내부(외부)</p>
        <p className='flex-1 flex justify-center'>거래액</p>
        <p className='flex-1 flex justify-center'>상태</p>
        <p className='flex-1 flex justify-center'>매니저</p>
        <p className='flex-1 flex justify-center'>세부 내용 확인</p>
      </div>
      {requestedData.map((item)=>{
        return <Request order={item.order} name={item.name} cyclity={item.cyclity} workDay={item.workDay} workTime={item.workTime} price={item.price} state={item.state} manager={item.manager} />
      })}
      <div className='fixed inset-0 bg-black opacity-50 h-screen w-screen'/>
      <div className='fixed inset-0 h-screen w-screen flex justify-center items-center'>
        <div className='h-[90%] w-[90%] bg-white rounded-xl flex justify-center items-center'>
          <div className='flex flex-col border border-black h-[95%] w-[95%]'>
            <div className='grow-0 border-b-2 border-black py-4'>
              <div className='flex text-lg font-medium py-1'>
                <p className='flex-1 flex justify-center'>순번</p>
                <p className='flex-1 flex justify-center'>이름</p>
                <p className='flex-1 flex justify-center'>정기여부</p>
                <p className='flex-1 flex justify-center'>작업일</p>
                <p className='flex-1 flex justify-center'>작업 시간</p>
                <p className='flex-1 flex justify-center'>거래액</p>
                <p className='flex-1 flex justify-center'>상태</p>
                <p className='flex-1 flex justify-center'>매니저</p>
              </div>
              <div className='flex text-lg py-1'>
                <p className='flex-1 flex justify-center'>5</p>
                <p className='flex-1 flex justify-center'>남도일</p>
                <p className='flex-1 flex justify-center'>일회성</p>
                <p className='flex-1 flex justify-center'>2023.07.12 11시</p>
                <p className='flex-1 flex justify-center'>2(3)</p>
                <p className='flex-1 flex justify-center'>40,000</p>
                <p className='flex-1 flex justify-center'>예약 완료</p>
                <p className='flex-1 flex justify-center'>-</p>
              </div>
            </div>
            <div className='grow flex'>
              <div className='flex-1 border-r-2 border-black'>
                <div className='px-8'>
                  <p className='text-xl font-bold py-4'>청소 항목</p>
                  <div className='border-b border-black'>
                    <div className='flex justify-between py-2'>
                      <div className='font-bold'>
                        화장실
                      </div>
                      <div className='border-b border-black'>
                        화장실, 기본 청소 2개
                      </div>
                    </div>
                  </div>
                  <div className='border-b border-black'>
                    <div className='flex justify-between py-2'>
                      <div className='font-bold'>
                        주방
                      </div>
                      <div className='border-b border-black'>
                        주방 간단 정리
                      </div>
                    </div>
                    <div className='flex flex-row-reverse py-2'>
                      <div className='border-b border-black'>
                        설거지
                      </div>
                    </div>
                    <div className='flex flex-row-reverse py-2'>
                      <div className='border-b border-black'>
                        싱크대 및 주방 배수구
                      </div>
                    </div>
                    <div className='flex flex-row-reverse py-2'>
                      <div className='border-b border-black'>
                        주방 선반 및 벽 기름 때
                      </div>
                    </div>
                    <div className='flex flex-row-reverse py-2'>
                      <div className='border-b border-black'>
                        화구 기름 때
                      </div>
                    </div>
                  </div>
                  <div className='border-b border-black'>
                    <div className='flex justify-between py-2'>
                      <div className='font-bold'>
                        방/거실
                      </div>
                      <div className='border-b border-black'>
                        방/거실 간단 정리
                      </div>
                    </div>
                    <div className='flex flex-row-reverse py-2'>
                      <div className='border-b border-black'>
                        기본 바닥 청소
                      </div>
                    </div>
                  </div>
                  <div className='border-b border-black'>
                    <div className='flex justify-between py-2'>
                      <div className='font-bold'>
                        기타
                      </div>
                      <div className='border-b border-black'>
                        빨래
                      </div>
                    </div>
                    <div className='flex flex-row-reverse py-2'>
                      <div className='border-b border-black'>
                        일반&재활용 쓰레기 처리
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='flex-1'>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
