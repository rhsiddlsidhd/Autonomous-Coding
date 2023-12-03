import { getDocs, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../../firebase";
import { useEffect, useState } from "react";
import { collection } from "firebase/firestore";
import ReviewItem from "./ReviewItem";
import PageNation from "./PageNation";

const ReviewCreateArea = ({ setCreateReviewData, createReviewData }) => {
  //데이터 Create

  // firestore 데이터 가져오기 (get)
  //다중문서가져오기 (컬렉션기준)

  const fetchUserReviewMultiData = async () => {
    const querySnapshot = await getDocs(collection(db, "userReviews"));
    const reviewData = querySnapshot.docs.map((doc) => {
      const data = doc.data();
      // timestamp 필드가 숫자인 경우 JavaScript Date 객체로 변환
      if (typeof data.timestamp === "number") {
        data.timestamp = new Date(data.timestamp);
      }
      return {
        id: doc.id,
        data: data,
        formattedDate: new Date(data.timestamp).toLocaleDateString("ko-KR"),
      };
    });

    setCreateReviewData(reviewData);
  };

  //처음 페이지 들어왔을때 불러오기 Create
  useEffect(() => {
    fetchUserReviewMultiData();
  }, []);

  // 모달에서 전송버튼 클릭시 새로 업데이트 (update) ( onSnapshot())
  useEffect(() => {
    const unsubscribe = onSnapshot(
      query(collection(db, "userReviews"), orderBy("timestamp", "desc")),
      (snapshot) => {
        // 컬렉션의 변경 사항을 처리하는 코드
        // snapshot에서 데이터를 추출하고 업데이트 작업 수행
        const updatedReviewData = snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
          formattedDate: new Date(doc.data().timestamp).toLocaleDateString(
            "ko-KR"
          ),
        }));
        setCreateReviewData(updatedReviewData);
      }
    );
    //클린업 함수
    return () => unsubscribe();
  }, [setCreateReviewData]);

  //PageNation

  const [currentPage, setCurrentPage] = useState(1);
  const limit = 5;

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const lastReview = currentPage * limit;
  const firstReview = lastReview - limit;
  const currentReviews = createReviewData.slice(firstReview, lastReview);

  return (
    <>
      {currentReviews.map((item) => (
        <ReviewItem key={item.id} item={item} />
      ))}
      <PageNation
        currentPage={currentPage}
        totalPages={Math.ceil(createReviewData.length / limit)}
        handlePageChange={handlePageChange}
        setCurrentPage={setCurrentPage}
        limit={limit}
      />
    </>
  );
};

export default ReviewCreateArea;
