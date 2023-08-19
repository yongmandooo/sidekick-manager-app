import React from "react";

const DetailInformation = (props) => {
  const info = props.details;
  return (
    <>
      <div className="flex justify-between items-center mb-4">
        <p className="text-xl font-medium">연락처</p>
        <p>{info.phone ?? "없음"}</p>
      </div>
      <div className="flex justify-between items-center mb-4">
        <p className="text-xl font-medium">주소</p>
        <p>{info.house_address ?? "없음"}</p>
      </div>
      <div className="flex justify-between items-center mb-4">
        <p className="text-xl font-medium">평수</p>
        <p>{info.house_size ?? "없음"}</p>
      </div>
      <div className="flex justify-between items-center mb-4">
        <p className="text-xl font-medium">출입 방법</p>
        <p>
          {info.house_visit &&
            (info.house_visit.method === "비밀번호"
              ? "공동현관: " +
                (info.house_visit.shared_password ?? "없음") +
                ", " +
                "비밀번호: " +
                (info.house_visit.private_password ?? "없음")
              : info.house_visit.option)}
        </p>
      </div>
      <div className="flex justify-between items-center mb-4">
        <p className="text-xl font-medium">상세 정보</p>
        <p>
          {info.house_babies || info.house_pets
            ? (info.house_babies ? "영유아 있음 " : "") +
              (info.house_pets ? "반려동물 있음" : "")
            : "없음"}
        </p>
      </div>
      <div className="flex justify-between items-center mb-4">
        <p className="text-xl font-medium">주의 사항</p>
        <p>{info.house_caution ?? "없음"}</p>
      </div>
      {/* <div className="flex justify-between items-center mb-4">
        <p className="text-xl font-medium">쓰레기 배출</p>
        <p>{"없음"}</p>
      </div> */}
      <div className="flex justify-between items-center mb-4">
        <p className="text-xl font-medium">청소도구</p>
        <p>
          {info.house_tools
            ? "진공청소기: " +
              (info.house_tools.vaccum_cleaner ?? "없음") +
              ", " +
              "밀대: " +
              (info.house_tools.mop ?? "없음") +
              ", " +
              "화장실 청소 솔: " +
              (info.house_tools.toilet_brush ?? "없음") +
              ", " +
              "쓰레기 봉투: " +
              (info.house_tools.garbage_disposal ?? "없음")
            : "없음"}
        </p>
      </div>
      {/* <div className="flex justify-between items-center mb-4">
        <p className="text-xl font-medium">매니저 준비 도구</p>
        <p>{"없음"}</p>
      </div> */}
    </>
  );
};

export default DetailInformation;
