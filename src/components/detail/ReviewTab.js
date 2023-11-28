import { faStar } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";
import { styled } from "styled-components";
import Modal from "react-modal";
import ReviewModal from "./ReviewModal";
import fetchUserReviewsRatings from "../../utils/fetchUserReviewsRatings";
import RightColumnGraph from "./RightColumnGraph";
import fetchUserReviewsGraph from "../../utils/fetchUserReviewsGraph";

// Modal react-modal doc
Modal.setAppElement("#root");

const ReviewTab = () => {
  const [isopen, setIsopen] = useState(false);
  const [averageGrade, setAverageGrade] = useState(0);
  const [graphData, setGraphData] = useState({
    veryGood: 0,
    like: 0,
    average: 0,
    soSo: 0,
    notGood: 0,
  });
  const [reviewPopulationCount, setReviewPopulationCount] = useState({
    veryGood: 0,
    like: 0,
    average: 0,
    soSo: 0,
    notGood: 0,
  });
  const [reviewCount, setReviewCount] = useState(0);

  const handleModalOpen = () => {
    setIsopen(true);
  };
  const handleModalClose = () => {
    setIsopen(false);
  };

  //평균 등급 데이터 가져오기(새로고침시 사라지는 현상 발생 해결)
  useEffect(() => {
    const initializeAverageGrade = async () => {
      try {
        const average = await fetchUserReviewsRatings();
        setAverageGrade(average);
      } catch (error) {
        console.error("Error initializing averageGrade: ", error);
      }
    };

    initializeAverageGrade();
  }, []);

  //그래프 데이터 value 값 가져오기
  useEffect(() => {
    const fetchData = async () => {
      try {
        //firsStore에서 데이터 가져오기
        const graphDataValue = await fetchUserReviewsGraph();
        const newGraphDataValue = calculateProgressValues(graphDataValue);
        setGraphData(newGraphDataValue);
      } catch (error) {
        console.error("그래프 데이터를 가져오는 중 오류 발생: ", error);
      }
    };

    fetchData(); // 즉시 호출
  }, []);

  const calculateProgressValues = (reviews) => {
    // 가져온 리뷰 데이터를 기반으로 프로그레스 바 값 계산
    const totalReviews = reviews.length;

    const veryGoodCount = reviews.filter((review) => review.grade === 5).length;
    const likeCount = reviews.filter((review) => review.grade === 4).length;
    const averageCount = reviews.filter((review) => review.grade === 3).length;
    const soSoCount = reviews.filter((review) => review.grade === 2).length;
    const notGoodCount = reviews.filter((review) => review.grade === 1).length;

    return {
      veryGood: (veryGoodCount / totalReviews) * 100,
      like: (likeCount / totalReviews) * 100,
      average: (averageCount / totalReviews) * 100,
      soSo: (soSoCount / totalReviews) * 100,
      notGood: (notGoodCount / totalReviews) * 100,
    };
  };

  // 리뷰 카운트

  useEffect(() => {
    const fetchPopulationCount = async () => {
      try {
        const populationCount = await fetchUserReviewsGraph();
        const newPopulationCount = calculatePopulationValues(populationCount);
        setReviewPopulationCount(newPopulationCount);
      } catch (err) {
        console.error("PopulationCount:", err);
      }
    };

    fetchPopulationCount();
  }, []);

  const calculatePopulationValues = (reviews) => {
    return {
      veryGood: reviews.filter((item) => item.grade === 5).length,
      like: reviews.filter((item) => item.grade === 4).length,
      average: reviews.filter((item) => item.grade === 3).length,
      soSo: reviews.filter((item) => item.grade === 2).length,
      notGood: reviews.filter((item) => item.grade === 1).length,
    };
  };

  //Review 개수 가져오기

  useEffect(() => {
    const fetchReviewCount = async () => {
      try {
        const reviews = await fetchUserReviewsGraph();
        setReviewCount(reviews.length);
      } catch (error) {
        console.error("리뷰 개수를 가져오는 중 오류 발생: ", error);
      }
    };

    fetchReviewCount();
  }, []);

  return (
    <ReviewContainer>
      <ReviewRating>
        <ReviewRatingNav>
          <p>REVIEW({reviewCount})</p>
          <p>전체 상품 리뷰 보기</p>
        </ReviewRatingNav>
        <ReviewRatingItem>
          <div className="leftColumn">
            <div>
              <FontAwesomeIcon icon={faStar} style={{ color: "gold" }} />
              <span>{averageGrade.toFixed(1)}</span>
            </div>
            <button onClick={handleModalOpen}>상품 리뷰 작성하기</button>
            {/* 상품리뷰 작성하기를 모달창으로 띄워보자 */}
            {/* isopen ,onRequestClose,shouldCloseOnOverlayClick Modal 사용법  */}
            <Modal
              isOpen={isopen}
              onRequestClose={handleModalClose}
              style={customStyles}
              // 모달창영역 벗어나 클릭시 나가기 버튼 막아주는것
              shouldCloseOnOverlayClick={false}
            >
              <ReviewModal
                onClose={handleModalClose}
                fetchUserReviewsRatings={fetchUserReviewsRatings}
                setAverageGrade={setAverageGrade}
                setGraphData={setGraphData}
                calculateProgressValues={calculateProgressValues}
                setReviewCount={setReviewCount}
                calculatePopulationValues={calculatePopulationValues}
                setReviewPopulationCount={setReviewPopulationCount}
              />
            </Modal>
          </div>
          <RightColumnGraph
            graphData={graphData}
            reviewPopulationCount={reviewPopulationCount}
          />
        </ReviewRatingItem>
      </ReviewRating>
    </ReviewContainer>
  );
};

export default ReviewTab;

const ReviewContainer = styled.div`
  /* background-color: red; */
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ReviewRating = styled.div`
  width: 100%;
  height: 18rem;
  border-bottom: 1px solid #edf1f6;
`;

const ReviewRatingNav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 3rem;
  border-bottom: 1px solid black;
`;

const ReviewRatingItem = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 15rem;
  & .leftColumn {
    width: 35%;
    height: 80%;
    border-right: 1px solid #edf1f6;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
    & div:first-child {
      font-size: 3rem;
    }
    & button {
      background-color: #14161a;
      color: #f6f6f6;
      padding: 0.5rem;
      box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px,
        rgba(0, 0, 0, 0.23) 0px 6px 6px;
    }
    & button:hover {
      background-color: #f6f6f6;
      color: #14161a;
      cursor: pointer;
    }
  }
`;

// 스타일 객체 정의 (= Modal style={customStyles} 적용)
const customStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.8)",
  },
  content: {
    width: "40%",
    margin: "auto",
    backgroundColor: "white",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.1)",
  },
};

// const ReviewTextArea = styled.div``;
