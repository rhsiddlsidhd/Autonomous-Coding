import { faStar } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { styled } from "styled-components";
import Modal from "react-modal";
import ReviewModal from "./ReviewModal";

// Modal react-modal doc
Modal.setAppElement("#root");

const ReviewTab = () => {
  const [isopen, setIsopen] = useState(false);

  const handleModalOpen = () => {
    setIsopen(true);
  };

  const handleModalClose = () => {
    setIsopen(false);
  };

  return (
    <ReviewContainer>
      <ReviewRating>
        <ReviewRatingNav>
          <p>REVIEW(0)</p>
          <p>전체 상품 리뷰 보기</p>
        </ReviewRatingNav>
        <ReviewRatingItem>
          <div className="leftColumn">
            <div>
              <FontAwesomeIcon icon={faStar} style={{ color: "gold" }} />
              <span>4.9</span>
            </div>
            <button onClick={handleModalOpen}>상품 리뷰 작성하기</button>
            {/* 상품리뷰 작성하기를 모달창으로 띄워보자 */}
            {/* isopen ,onRequestClose Modal 사용법  */}
            <Modal
              isOpen={isopen}
              onRequestClose={handleModalClose}
              style={customStyles}
            >
              <ReviewModal onClose={handleModalClose} />
            </Modal>
          </div>
          <div>그래프</div>
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
  align-items: center;
  border: 1px solid red;
  height: 15rem;
  & .leftColumn {
    /* background-color: red; */
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
    backgroundColor: "rgba(0, 0, 0, 0.5)",
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
