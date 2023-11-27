import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";

//firestore 에서 별점 Read 및 평균 값 계산

const fetchUserReviewsRatings = async () => {
  try {
    const userReviewsCollection = collection(db, "userReviews");
    const querySnapshot = await getDocs(userReviewsCollection);

    const ratings = [];
    querySnapshot.forEach((doc) => {
      // data) firestore 내에 저장된 모든 데이터를 가지고 있음
      const data = doc.data();
      const rating = data.grade;

      // 별점이 있는 경우에만 배열에 추가
      if (rating) {
        ratings.push(rating);
      }
    });
    const sum =
      ratings.length > 0 ? ratings.reduce((acc, grade) => acc + grade, 0) : 0;
    const average = ratings.length > 0 ? sum / ratings.length : 0;
    return average;
  } catch (error) {
    console.error("Error fetching user reviews: ", error);
    return [];
  }
};

export default fetchUserReviewsRatings;
