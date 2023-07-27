import React from "react";
import NextActionBtn from "./nextActionBtn";
import AlertBtn from "./alertBtn";
import AnotherOptionBtn from "./anotherOptionBtn";

const DetailsModal = (props) => {
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
                <p className="flex-1 flex justify-center">5</p>
                <p className="flex-1 flex justify-center">남도일</p>
                <p className="flex-1 flex justify-center">일회성</p>
                <p className="flex-1 flex justify-center">2023.07.12 11시</p>
                <p className="flex-1 flex justify-center">2(3)</p>
                <p className="flex-1 flex justify-center">40,000</p>
                <p className="flex-1 flex justify-center">예약 완료</p>
                <p className="flex-1 flex justify-center">-</p>
              </div>
            </div>
            <div className="flex-auto flex overflow-hidden">
              <div className="flex-1 border-r-2 border-black">
                <div className="px-8 pb-8 h-full overflow-y-scroll">
                  <p className="text-xl font-bold py-4">청소 항목</p>
                  <div className="border-b border-black">
                    <div className="flex justify-between py-2">
                      <div className="font-bold">화장실</div>
                      <div className="border-b border-black">
                        화장실, 기본 청소 2개
                      </div>
                    </div>
                  </div>
                  <div className="border-b border-black">
                    <div className="flex justify-between py-2">
                      <div className="font-bold">주방</div>
                      <div className="border-b border-black">
                        주방 간단 정리
                      </div>
                    </div>
                    <div className="flex flex-row-reverse py-2">
                      <div className="border-b border-black">설거지</div>
                    </div>
                    <div className="flex flex-row-reverse py-2">
                      <div className="border-b border-black">
                        싱크대 및 주방 배수구
                      </div>
                    </div>
                    <div className="flex flex-row-reverse py-2">
                      <div className="border-b border-black">
                        주방 선반 및 벽 기름 때
                      </div>
                    </div>
                    <div className="flex flex-row-reverse py-2">
                      <div className="border-b border-black">화구 기름 때</div>
                    </div>
                  </div>
                  <div className="border-b border-black">
                    <div className="flex justify-between py-2">
                      <div className="font-bold">방/거실</div>
                      <div className="border-b border-black">
                        방/거실 간단 정리
                      </div>
                    </div>
                    <div className="flex flex-row-reverse py-2">
                      <div className="border-b border-black">
                        기본 바닥 청소
                      </div>
                    </div>
                  </div>
                  <div className="border-b border-black">
                    <div className="flex justify-between py-2">
                      <div className="font-bold">기타</div>
                      <div className="border-b border-black">빨래</div>
                    </div>
                    <div className="flex flex-row-reverse py-2">
                      <div className="border-b border-black">
                        일반&재활용 쓰레기 처리
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between py-2 items-center">
                      <div className="font-bold">미션</div>
                      <div className="border border-black rounded flex justify-between gap-2 px-2 py-1 w-3/4">
                        <input className="border-none grow"></input>
                        <NextActionBtn text="입력" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <div className="py-8 px-6">
                  <div className="flex justify-between items-center mb-4">
                    <p className="text-xl font-medium">연락처</p>
                    <p>010-1234-5678</p>
                  </div>
                  <div className="flex justify-between items-center mb-4">
                    <p className="text-xl font-medium">주소</p>
                    <p>서울특별시 관악구 남부순환로 1080, 612호</p>
                  </div>
                  <div className="flex justify-between items-center mb-4">
                    <p className="text-xl font-medium">평수</p>
                    <p>9평</p>
                  </div>
                  <div className="flex justify-between items-center mb-4">
                    <p className="text-xl font-medium">출입 방법</p>
                    <p>비밀번호, 공동현관: 경비1234별, 세대현관: 3554</p>
                  </div>
                  <div className="flex justify-between items-center mb-4">
                    <p className="text-xl font-medium">상세 정보</p>
                    <p>반려동물 없음, 영유아 없음</p>
                  </div>
                  <div className="flex justify-between items-center mb-4">
                    <p className="text-xl font-medium">주의 사항</p>
                    <p>없음</p>
                  </div>
                  <div className="flex justify-between items-center mb-4">
                    <p className="text-xl font-medium">쓰레기 배출</p>
                    <p>없음</p>
                  </div>
                  <div className="flex justify-between items-center mb-4">
                    <p className="text-xl font-medium">청소도구</p>
                    <p>진공청소기: 거실 구석, 밀대: 주방 옆 창고 안쪽</p>
                  </div>
                  <div className="flex justify-between items-center mb-4">
                    <p className="text-xl font-medium">매니저 준비 도구</p>
                    <p>
                      스퀴지, 화장실 바닥 청소 솔, 베이킹 소다, 마른 걸레, 세차
                      걸레
                    </p>
                  </div>
                  <div className="flex justify-between items-center mb-4">
                    <p className="text-xl font-medium">매니저</p>
                    <div className="border border-black rounded flex justify-between gap-2 px-2 py-1">
                      <input className="border-none grow"></input>
                      <NextActionBtn text="저장" />
                    </div>
                  </div>
                  <div className="flex justify-between items-center py-6">
                    <AlertBtn text="작업 취소/환불" />
                    <div className="flex gap-4">
                      <NextActionBtn text="매칭 완료" />
                      <AnotherOptionBtn text="닫기" />
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
