import { getDocs, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase";
import { useEffect, useState } from "react";
import { collection } from "firebase/firestore";
import ReviewItem from "./ReviewItem";

const ReviewCreateArea = () => {
  //데이터 Create
  const [createReviewData, setCreateReviewData] = useState([]);

  // firestore 데이터 가져오기 (get)
  //다중문서가져오기 (컬렉션기준)

  const fetchUserReviewMultiData = async () => {
    const querySnapshot = await getDocs(collection(db, "userReviews"));
    const reviewData = querySnapshot.docs.map((doc) => ({
      // doc.data() is never undefined for query doc snapshots
      // console.log(doc.id, " => ", doc.data());
      id: doc.id,
      data: doc.data(),
    }));

    setCreateReviewData(reviewData);
  };

  //처음 페이지 들어왔을때 불러오기 Create
  useEffect(() => {
    fetchUserReviewMultiData();
  }, []);

  // 모달에서 전송버튼 클릭시 새로 업데이트 (update) ( onSnapshot())
  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(db, "userReviews"),
      (snapshot) => {
        // 컬렉션의 변경 사항을 처리하는 코드
        // snapshot에서 데이터를 추출하고 업데이트 작업 수행
        const updatedReviewData = snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }));
        setCreateReviewData(updatedReviewData);
      }
    );
    //클린업 함수
    return () => unsubscribe();
  }, [setCreateReviewData]);

  return (
    <>
      {createReviewData.map((item) => (
        <ReviewItem key={item.id} review={item} />
      ))}
    </>
  );
};

export default ReviewCreateArea;
