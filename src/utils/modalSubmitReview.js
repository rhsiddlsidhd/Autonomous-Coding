import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";
import fetchUserReviewsRatings from "./fetchUserReviewsRatings";
import fetchUserReviewsGraph from "./fetchUserReviewsGraph";

const modalSubmitReview = async (
  issue,
  setAverageGrade,
  onClose,
  setGraphData,
  calculateProgressValues,
  setReviewCount,
  calculatePopulationValues,
  setReviewPopulationCount
) => {
  // 필수 필드가 비어 있지 않은지 확인
  if (issue.name === "" || issue.grade === 0 || issue.message === "") {
    window.alert("성명, 별점 및 후기는 필수 입력 항목입니다.");
    return;
  }
  // 작성한 날짜 등록
  try {
    // Firestore에 데이터 추가
    const docRef = await addDoc(collection(db, "userReviews"), {
      name: issue.name,
      grade: issue.grade,
      message: issue.message,
      // 데이터 전송시에 시간을 추가하여 Create 때 활용
      timestamp: Number(new Date()),
    });
    // console.log("Document written with ID: ", docRef.id);

    // 전송 버튼 클릭시 평균값 value data 전송
    const average = await fetchUserReviewsRatings();
    // 상태 업데이트
    setAverageGrade(average);

    //그래프 별점
    const graphDataValue = await fetchUserReviewsGraph();
    const newGraphDataValue = calculateProgressValues(graphDataValue);
    setGraphData(newGraphDataValue);

    //전체 리뷰 수
    setReviewCount((prev) => prev + 1);

    //투표인원카운트
    const populationCount = await fetchUserReviewsGraph();
    const newPopulationCount = calculatePopulationValues(populationCount);
    setReviewPopulationCount(newPopulationCount);

    // 알림 메시지
    window.alert("작성이 완료되었습니다. 감사합니다.");
    onClose();
  } catch (error) {
    console.error("Error adding document: ", error);
  }
};

export default modalSubmitReview;
