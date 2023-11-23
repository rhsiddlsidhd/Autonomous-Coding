import { useState } from "react";
import { styled } from "styled-components";

const ReviewModal = ({ isopen, onClose }) => {
  const [issue, setIssue] = useState({
    name: "",
    grade: "",
    message: "",
  });

  const hSubmit = (e) => {
    e.preventDefault();
    onClose();
  };

  const [rating, setRating] = useState([false, false, false, false, false]);

  return (
    <>
      <Custom>
        <h2 style={{ marginBottom: "10px" }}>리뷰쓰기</h2>
        <form onSubmit={hSubmit}>
          <div className="username">
            <h3>성명</h3>
            <label htmlFor="name"></label>
            <input
              type="text"
              id="name"
              value={issue.name}
              onChange={(e) =>
                setIssue((prev) => ({ ...prev, name: e.target.value }))
              }
            ></input>
          </div>
          <div className="usergrade">
            <h3>상품은 만족하셨나요?</h3>
            <label htmlFor="grade">
              <input type="checkbox" id="grade1"></input>
              <input type="checkbox" id="grade2"></input>
              <input type="checkbox" id="grade3"></input>
              <input type="checkbox" id="grade4"></input>
              <input type="checkbox" id="grade5"></input>
            </label>
          </div>
          <div className="userfeedback">
            <h3>어떤 점이 좋았나요?</h3>
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
  & form {
    width: 80%;
    height: 100%;
    border-top: 1px solid #bfbfbf;
    display: flex;
    flex-direction: column;
    align-items: center;

    & .username {
      display: flex;
      width: 100%;
      height: 15%;
      flex-direction: column;
      justify-content: center;
      border-bottom: 1px solid #bfbfbf;
      & input {
        width: 30%;
      }
    }
    & .usergrade {
      /* margin: 50px 0; */
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 80%;
      height: 20%;
      & h3 {
        margin: 10px 0;
      }
      & label > input {
        width: 30px;
        height: 30px;
      }
    }
    & .userfeedback {
      border-top: 1px solid #bfbfbf;
      width: 100%;
      height: 50%;
      display: flex;
      flex-direction: column;
      align-items: center;

      & h3 {
        margin: 10px 0;
      }
      & label {
        width: 100%;
        height: 250px;
        & textarea {
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
  & button {
    width: 80px;
    height: 30px;
    &:hover {
      background-color: black;
      color: white;
      cursor: pointer;
    }
  }
`;
