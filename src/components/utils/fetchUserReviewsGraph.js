import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";

const fetchUserReviewsGraph = async () => {
  try {
    const userReviewsCollection = collection(db, "userReviews");
    const querySnapshot = await getDocs(userReviewsCollection);

    const data = querySnapshot.docs.map((doc) => {
      return doc.data();
    });
    return data;
  } catch (err) {
    console.error("Error fetching user reviews: ", err);
    return [];
  }
};

export default fetchUserReviewsGraph;
