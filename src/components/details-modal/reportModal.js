import React, { useEffect } from "react";
import NextActionBtn from "../buttons/nextActionBtn";
import AnotherOptionBtn from "../buttons/anotherOptionBtn";

const ReportModal = (props) => {
  useEffect(() => {
    props.setIsOpenReportModal(props.isOpenReportModal);
  }, [props]);
  return (
    <div className="fixed inset-0 h-screen w-screen flex">
      <div className="flex-1" />
      <div className="flex-1 flex items-center">
        <div className="w-4/5 h-5/6 bg-white border border-black rounded-lg ml-4">
          <div className="px-6 h-full overflow-y-scroll">
            <p className="text-xl font-bold py-4">청소 리포트 작성</p>
            <p className="text-lg font-bold pb-2">구역별 변동 사항</p>
            <p>없으면 비워두세요.</p>
            <div className="py-8 flex flex-col gap-4">
              <div className="flex items-start justify-between">
                <p className="font-bold">화장실</p>
                <textarea className="w-4/5 bg-[#EAEAEA] rounded" />
              </div>
              <div className="flex items-start justify-between">
                <p className="font-bold">주방</p>
                <textarea className="w-4/5 bg-[#EAEAEA] rounded" />
              </div>
              <div className="flex items-start justify-between">
                <p className="font-bold">방/거실</p>
                <textarea className="w-4/5 bg-[#EAEAEA] rounded" />
              </div>
              <div className="flex items-start justify-between">
                <p className="font-bold">기타</p>
                <textarea className="w-4/5 bg-[#EAEAEA] rounded" />
              </div>
            </div>

            <p className="text-lg font-bold pb-2">다음 청소 추천</p>
            <p className="font-bold">다음 번엔 안해도 괜찮아요</p>
            <div className="flex flex-col gap-2 pt-2 pb-4">
              <div className="flex justify-between gap-4">
                <input
                  className="bg-[#EAEAEA] font-bold px-2 py-1 rounded"
                  placeholder="청소코드"
                />
                <input
                  className="grow bg-[#EAEAEA] text-gray-700 rounded px-2"
                  placeholder="추천 이유"
                />
              </div>
              <div className="flex justify-between gap-4">
                <input
                  className="bg-[#EAEAEA] font-bold px-2 py-1 rounded"
                  placeholder="청소코드"
                />
                <input
                  className="grow bg-[#EAEAEA] text-gray-700 rounded px-2"
                  placeholder="추천 이유"
                />
              </div>
            </div>
            <p className="font-bold">다음 번에 추가하면 좋아요</p>
            <div className="flex flex-col gap-2 pt-2 pb-4">
              <div className="flex justify-between gap-4">
                <input
                  className="bg-[#EAEAEA] font-bold px-2 py-1 rounded"
                  placeholder="청소코드"
                />
                <input
                  className="grow bg-[#EAEAEA] text-gray-700 rounded px-2"
                  placeholder="추천 이유"
                />
              </div>
              <div className="flex justify-between gap-4">
                <input
                  className="bg-[#EAEAEA] font-bold px-2 py-1 rounded"
                  placeholder="청소코드"
                />
                <input
                  className="grow bg-[#EAEAEA] text-gray-700 rounded px-2"
                  placeholder="추천 이유"
                />
              </div>
            </div>

            <p className="text-xl font-bold py-4">청소&정리 꿀템 추천</p>
            <div className="flex flex-col gap-2 pb-4">
              <div className="flex gap-2">
                <div className="flex-1">
                  <input
                    className="w-full bg-[#EAEAEA] text-gray-700 rounded px-2 py-1"
                    placeholder="이름"
                  />
                </div>
                <div className="flex-[2]">
                  <input
                    className="w-full bg-[#EAEAEA] text-gray-700 rounded px-2 py-1"
                    placeholder="추천 이유"
                  />
                </div>
                <div className="flex-1">
                  <input
                    className="w-full bg-[#EAEAEA] text-gray-700 rounded px-2 py-1"
                    placeholder="링크"
                  />
                </div>
              </div>
              <div className="flex gap-2">
                <div className="flex-1">
                  <input
                    className="w-full bg-[#EAEAEA] text-gray-700 rounded px-2 py-1"
                    placeholder="이름"
                  />
                </div>
                <div className="flex-[2]">
                  <input
                    className="w-full bg-[#EAEAEA] text-gray-700 rounded px-2 py-1"
                    placeholder="추천 이유"
                  />
                </div>
                <div className="flex-1">
                  <input
                    className="w-full bg-[#EAEAEA] text-gray-700 rounded px-2 py-1"
                    placeholder="링크"
                  />
                </div>
              </div>
              <div className="flex gap-2">
                <div className="flex-1">
                  <input
                    className="w-full bg-[#EAEAEA] text-gray-700 rounded px-2 py-1"
                    placeholder="이름"
                  />
                </div>
                <div className="flex-[2]">
                  <input
                    className="w-full bg-[#EAEAEA] text-gray-700 rounded px-2 py-1"
                    placeholder="추천 이유"
                  />
                </div>
                <div className="flex-1">
                  <input
                    className="w-full bg-[#EAEAEA] text-gray-700 rounded px-2 py-1"
                    placeholder="링크"
                  />
                </div>
              </div>
            </div>

            <div className="pt-12 pb-4 flex flex-row-reverse gap-4">
              <AnotherOptionBtn
                text="닫기"
                onClickFunc={() => props.setIsOpenReportModal(false)}
              />
              <NextActionBtn text="발행" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportModal;
