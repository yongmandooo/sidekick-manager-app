import React, { useEffect, useState } from "react";
import NextActionBtn from "../buttons/nextActionBtn";
import AnotherOptionBtn from "../buttons/anotherOptionBtn";
import axios from "axios";

const ReportModal = (props) => {
  const [toiletStr, setToiletStr] = useState("");
  const [kitchenStr, setKitchenStr] = useState("");
  const [livingRoomStr, setLivingRoomStr] = useState("");
  const [etcStr, setEtcStr] = useState("");

  const [disrecommendCode1, setDisrecommendCode1] = useState("");
  const [disrecommendReason1, setDisrecommendReason1] = useState("");
  const [disrecommendCode2, setDisrecommendCode2] = useState("");
  const [disrecommendReason2, setDisrecommendReason2] = useState("");

  const [recommendCode1, setRecommendCode1] = useState("");
  const [recommendReason1, setRecommendReason1] = useState("");
  const [recommendCode2, setRecommendCode2] = useState("");
  const [recommendReason2, setRecommendReason2] = useState("");

  const [toolRecommend1, setToolRecommend1] = useState("");
  const [toolRecommendReason1, setToolRecommendReason1] = useState("");
  const [toolRecommendUrl1, setToolRecommendUrl1] = useState("");
  const [toolRecommend2, setToolRecommend2] = useState("");
  const [toolRecommendReason2, setToolRecommendReason2] = useState("");
  const [toolRecommendUrl2, setToolRecommendUrl2] = useState("");
  const [toolRecommend3, setToolRecommend3] = useState("");
  const [toolRecommendReason3, setToolRecommendReason3] = useState("");
  const [toolRecommendUrl3, setToolRecommendUrl3] = useState("");

  useEffect(() => {
    props.setIsOpenReportModal(props.isOpenReportModal);
  }, [props]);

  const sendReport = async () => {
    await axios({
      method: "post",
      url: `http://localhost:8080/api/admin/report`,
      data: {
        cleaning_session_id: props.currentId,
        changes: {
          bathroom: toiletStr,
          kitchen: kitchenStr,
          livingroom: livingRoomStr,
          etc: etcStr,
        },
        removed_cleaning_list: [
          {
            code: disrecommendCode1,
            reason: disrecommendReason1,
          },
          {
            code: disrecommendCode2,
            reason: disrecommendReason2,
          },
        ],
        added_cleaning_list: [
          {
            code: recommendCode1,
            reason: recommendReason1,
          },
          {
            code: recommendCode2,
            reason: recommendReason2,
          },
        ],
        recommended_tool_list: [
          {
            name: toolRecommend1,
            reason: toolRecommendReason1,
            url: toolRecommendUrl1,
          },
          {
            name: toolRecommend2,
            reason: toolRecommendReason2,
            url: toolRecommendUrl2,
          },
          {
            name: toolRecommend3,
            reason: toolRecommendReason3,
            url: toolRecommendUrl3,
          },
        ],
      },
    })
      .then(function (response) {
        console.log(response.status);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

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
                <textarea
                  className="w-4/5 bg-[#EAEAEA] rounded"
                  onChange={(e) => setToiletStr(e.target.value)}
                />
              </div>
              <div className="flex items-start justify-between">
                <p className="font-bold">주방</p>
                <textarea
                  className="w-4/5 bg-[#EAEAEA] rounded"
                  onChange={(e) => setKitchenStr(e.target.value)}
                />
              </div>
              <div className="flex items-start justify-between">
                <p className="font-bold">방/거실</p>
                <textarea
                  className="w-4/5 bg-[#EAEAEA] rounded"
                  onChange={(e) => setLivingRoomStr(e.target.value)}
                />
              </div>
              <div className="flex items-start justify-between">
                <p className="font-bold">기타</p>
                <textarea
                  className="w-4/5 bg-[#EAEAEA] rounded"
                  onChange={(e) => setEtcStr(e.target.value)}
                />
              </div>
            </div>

            <p className="text-lg font-bold pb-2">다음 청소 추천</p>
            <p className="font-bold">다음 번엔 안해도 괜찮아요</p>
            <div className="flex flex-col gap-2 pt-2 pb-4">
              <div className="flex justify-between gap-4">
                <input
                  className="bg-[#EAEAEA] font-bold px-2 py-1 rounded"
                  placeholder="청소코드"
                  onChange={(e) => setDisrecommendCode1(e.target.value)}
                />
                <input
                  className="grow bg-[#EAEAEA] text-gray-700 rounded px-2"
                  placeholder="추천 이유"
                  onChange={(e) => setDisrecommendReason1(e.target.value)}
                />
              </div>
              <div className="flex justify-between gap-4">
                <input
                  className="bg-[#EAEAEA] font-bold px-2 py-1 rounded"
                  placeholder="청소코드"
                  onChange={(e) => setDisrecommendCode2(e.target.value)}
                />
                <input
                  className="grow bg-[#EAEAEA] text-gray-700 rounded px-2"
                  placeholder="추천 이유"
                  onChange={(e) => setDisrecommendReason2(e.target.value)}
                />
              </div>
            </div>
            <p className="font-bold">다음 번에 추가하면 좋아요</p>
            <div className="flex flex-col gap-2 pt-2 pb-4">
              <div className="flex justify-between gap-4">
                <input
                  className="bg-[#EAEAEA] font-bold px-2 py-1 rounded"
                  placeholder="청소코드"
                  onChange={(e) => setRecommendCode1(e.target.value)}
                />
                <input
                  className="grow bg-[#EAEAEA] text-gray-700 rounded px-2"
                  placeholder="추천 이유"
                  onChange={(e) => setRecommendReason1(e.target.value)}
                />
              </div>
              <div className="flex justify-between gap-4">
                <input
                  className="bg-[#EAEAEA] font-bold px-2 py-1 rounded"
                  placeholder="청소코드"
                  onChange={(e) => setRecommendCode2(e.target.value)}
                />
                <input
                  className="grow bg-[#EAEAEA] text-gray-700 rounded px-2"
                  placeholder="추천 이유"
                  onChange={(e) => setRecommendReason2(e.target.value)}
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
                    onChange={(e) => setToolRecommend1(e.target.value)}
                  />
                </div>
                <div className="flex-[2]">
                  <input
                    className="w-full bg-[#EAEAEA] text-gray-700 rounded px-2 py-1"
                    placeholder="추천 이유"
                    onChange={(e) => setToolRecommendReason1(e.target.value)}
                  />
                </div>
                <div className="flex-1">
                  <input
                    className="w-full bg-[#EAEAEA] text-gray-700 rounded px-2 py-1"
                    placeholder="링크"
                    onChange={(e) => setToolRecommendUrl1(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex gap-2">
                <div className="flex-1">
                  <input
                    className="w-full bg-[#EAEAEA] text-gray-700 rounded px-2 py-1"
                    placeholder="이름"
                    onChange={(e) => setToolRecommend2(e.target.value)}
                  />
                </div>
                <div className="flex-[2]">
                  <input
                    className="w-full bg-[#EAEAEA] text-gray-700 rounded px-2 py-1"
                    placeholder="추천 이유"
                    onChange={(e) => setToolRecommendReason2(e.target.value)}
                  />
                </div>
                <div className="flex-1">
                  <input
                    className="w-full bg-[#EAEAEA] text-gray-700 rounded px-2 py-1"
                    placeholder="링크"
                    onChange={(e) => setToolRecommendUrl2(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex gap-2">
                <div className="flex-1">
                  <input
                    className="w-full bg-[#EAEAEA] text-gray-700 rounded px-2 py-1"
                    placeholder="이름"
                    onChange={(e) => setToolRecommend3(e.target.value)}
                  />
                </div>
                <div className="flex-[2]">
                  <input
                    className="w-full bg-[#EAEAEA] text-gray-700 rounded px-2 py-1"
                    placeholder="추천 이유"
                    onChange={(e) => setToolRecommendReason3(e.target.value)}
                  />
                </div>
                <div className="flex-1">
                  <input
                    className="w-full bg-[#EAEAEA] text-gray-700 rounded px-2 py-1"
                    placeholder="링크"
                    onChange={(e) => setToolRecommendUrl3(e.target.value)}
                  />
                </div>
              </div>
            </div>

            <div className="pt-12 pb-4 flex flex-row-reverse gap-4">
              <AnotherOptionBtn
                text="닫기"
                onClickFunc={() => props.setIsOpenReportModal(false)}
              />
              <NextActionBtn
                text="발행"
                onClickFunc={(e) => {
                  e.preventDefault();
                  sendReport();
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportModal;
