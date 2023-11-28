import { useState } from "react";
import { styled } from "styled-components";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import submitReview from "../utils/submitReview";

const ReviewModal = ({
  onClose,
  setAverageGrade,
  setGraphData,
  calculateProgressValues,
  setReviewCount,
  calculatePopulationValues,
  setReviewPopulationCount,
}) => {
  const [issue, setIssue] = useState({
    name: "",
    grade: 0,
    message: "",
  });

  // 전송 버튼 클릭시 해당 issue 데이터를 firebase 로 데이터 전송
  const handleSubmit = (e) => {
    e.preventDefault();
    submitReview(
      issue,
      setAverageGrade,
      onClose,
      setGraphData,
      calculateProgressValues,
      setReviewCount,
      calculatePopulationValues,
      setReviewPopulationCount
    );
  };

  //별점 점수 데이터
  const [rating, setRating] = useState([false, false, false, false, false]);
  const ARRAY = [0, 1, 2, 3, 4];

  const handleStarClick = (index) => {
    // _ : 여러 의미 사용 중에서 미사용 매개변수를 뜻함 (관례)
    setRating((prev) => prev.map((_, i) => (i <= index ? true : false)));
    setIssue((prev) => ({ ...prev, grade: index + 1 }));
  };

  // 별점 점수에 대한 텍스트 배열
  const ratingTexts = [
    "1점 (별로예요)",
    "2점 (그저그래요)",
    "3점 (괜찮아요)",
    "4점 (좋아요)",
    "5점 (최고예요)",
  ];
  // console 배열 값 가져오기
  // console.log(ratingTexts[0]);

  // 별점 점수에 대한 스타일
  const ratingStyles = {
    1: { color: "red", fontSize: "20px" },
    2: { color: "red", fontSize: "20px" },
    3: { color: "gold", fontSize: "20px" },
    4: { color: "green", fontSize: "20px" },
    5: { color: "blue", fontSize: "20px" },
  };
  //console 객체 값 가져오기
  // console.log(ratingStyles[1]);

  const selectedRating = rating.lastIndexOf(true);
  const selectedText = ratingTexts[selectedRating];

  return (
    <>
      <Custom>
        <h2 style={{ marginBottom: "10px" }}>리뷰쓰기</h2>
        <form onSubmit={handleSubmit}>
          <div className="username">
            <h3>성명</h3>
            <label htmlFor="name">
              <input
                type="text"
                id="name"
                value={issue.name}
                onChange={(e) =>
                  setIssue((prev) => ({ ...prev, name: e.target.value }))
                }
              />
            </label>
          </div>
          <div className="usergrade">
            <h3>상품은 만족하셨나요?</h3>
            <Stars>
              {ARRAY.map((item, idx) => (
                <FontAwesomeIcon
                  icon={faStar}
                  key={idx}
                  onClick={() => handleStarClick(item)}
                  className={rating[item] ? "yellowStar" : ""}
                />
              ))}
            </Stars>
            <p
              className={rating.includes(true) ? "visible" : "hidden"}
              style={ratingStyles[selectedRating + 1]}
            >
              {selectedText}
            </p>
          </div>
          <div className="userfeedback">
            <h3>후기를 남겨주세요.</h3>
            <label htmlFor="feedback">
              <textarea
                id="feedback"
                onChange={(e) =>
                  setIssue((prev) => ({ ...prev, message: e.target.value }))
                }
              ></textarea>
            </label>
          </div>
          <ModalButton>
            <button onClick={onClose}>취소</button>
            <button type="submit">등록</button>
          </ModalButton>
        </form>
      </Custom>
    </>
  );
};
export default ReviewModal;

const Custom = styled.div`
  width: 100%;
  height: 100%;
  background-color: #f3f5f7;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  form {
    width: 80%;
    height: 100%;
    border-top: 1px solid #bfbfbf;
    display: flex;
    flex-direction: column;
    align-items: center;

    .username {
      display: flex;
      width: 100%;
      height: 15%;
      flex-direction: column;
      justify-content: center;
      border-bottom: 1px solid #bfbfbf;
      input {
        width: 30%;
      }
    }
    .usergrade {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 80%;
      height: 20%;
      h3 {
        margin: 10px 0;
      }
      label > input {
        width: 30px;
        height: 30px;
      }
      .visible {
        visibility: visible;
      }
      .hidden {
        visibility: hidden;
      }
    }
    .userfeedback {
      border-top: 1px solid #bfbfbf;
      width: 100%;
      height: 50%;
      display: flex;
      flex-direction: column;
      align-items: center;

      h3 {
        margin: 10px 0;
      }
      label {
        width: 100%;
        height: 250px;
        textarea {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
`;

const ModalButton = styled.div`
  display: flex;
  width: 50%;
  height: 15%;
  align-items: center;
  justify-content: space-between;
  button {
    width: 80px;
    height: 30px;
    &:hover {
      background-color: black;
      color: white;
      cursor: pointer;
    }
  }
`;

const Stars = styled.div`
  .yellowStar {
    color: gold;
  }
`;
