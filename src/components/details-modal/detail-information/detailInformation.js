import React from "react";

const DetailInformation = (props) => {
  const info = props.details;
  return (
    <>
      <div className="flex justify-between items-center mb-4">
        <p className="text-xl font-medium">연락처</p>
        <p>{info.contact ?? "없음"}</p>
      </div>
      <div className="flex justify-between items-center mb-4">
        <p className="text-xl font-medium">주소</p>
        <p>{info.address ?? "없음"}</p>
      </div>
      <div className="flex justify-between items-center mb-4">
        <p className="text-xl font-medium">평수</p>
        <p>{info.area ?? "없음"}</p>
      </div>
      <div className="flex justify-between items-center mb-4">
        <p className="text-xl font-medium">출입 방법</p>
        <p>{info.accessWay ?? "없음"}</p>
      </div>
      <div className="flex justify-between items-center mb-4">
        <p className="text-xl font-medium">상세 정보</p>
        <p>{info.information ?? "없음"}</p>
      </div>
      <div className="flex justify-between items-center mb-4">
        <p className="text-xl font-medium">주의 사항</p>
        <p>{info.caution ?? "없음"}</p>
      </div>
      <div className="flex justify-between items-center mb-4">
        <p className="text-xl font-medium">쓰레기 배출</p>
        <p>{info.trash ?? "없음"}</p>
      </div>
      <div className="flex justify-between items-center mb-4">
        <p className="text-xl font-medium">청소도구</p>
        <p>{info.cleaningTools ?? "없음"}</p>
      </div>
      <div className="flex justify-between items-center mb-4">
        <p className="text-xl font-medium">매니저 준비 도구</p>
        <p>{info.preparation ?? "없음"}</p>
      </div>
    </>
  );
};

export default DetailInformation;
