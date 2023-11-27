import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase";
import fetchUserReviewsRatings from "./fetchUserReviewsRatings";

const submitReview = async (issue, setAverageGrade, onClose) => {
  // 필수 필드가 비어 있지 않은지 확인
  if (issue.name === "" || issue.grade === 0 || issue.message === "") {
    window.alert("성명, 별점 및 후기는 필수 입력 항목입니다.");
    return;
  }

  try {
    // Firestore에 데이터 추가
    const docRef = await addDoc(collection(db, "userReviews"), {
      name: issue.name,
      grade: issue.grade,
      message: issue.message,
    });
    // console.log("Document written with ID: ", docRef.id);

    // 전송 버튼 클릭시 평균값 value data 전송
    const average = await fetchUserReviewsRatings();

    // 상태 업데이트
    setAverageGrade(average);

    // 알림 메시지
    window.alert("작성이 완료되었습니다. 감사합니다.");
    onClose();
  } catch (error) {
    console.error("Error adding document: ", error);
  }
};

export default submitReview;
