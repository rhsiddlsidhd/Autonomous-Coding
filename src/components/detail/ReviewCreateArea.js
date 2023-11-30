import {
  faAngleDown,
  faThumbsDown,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { styled } from "styled-components";

const ReviewCreateArea = () => {
  return (
    <>
      <UserReviewCreateWrapper>
        <UserReviewCreateLeft>
          <UserReviewCreateDate>
            <div>등급</div>
            <div>날짜</div>
          </UserReviewCreateDate>
          <UserReviewCreate>
            안녕안녕안녕안녕안녕안녕안녕안안녕안녕안녕안녕안녕안녕안녕안안녕안녕안녕안녕안녕안녕안녕안안녕안녕안녕안녕안녕안녕안녕안안녕안녕안녕안녕안녕안녕안녕안안녕안녕안녕안녕안녕안녕안
          </UserReviewCreate>
          <UserReviewCreateSub>
            <UserReviewCreateUpDown>
              <UserReviewCreateUp>
                <div>좋아요</div>
                <FontAwesomeIcon icon={faThumbsUp} />
              </UserReviewCreateUp>
              <UserReviewCreateDown>
                <div>싫어요</div>
                <FontAwesomeIcon icon={faThumbsDown} />
              </UserReviewCreateDown>
            </UserReviewCreateUpDown>
            <UserReviewCreateComment>
              <div>댓글</div>
              <FontAwesomeIcon icon={faAngleDown} />
            </UserReviewCreateComment>
          </UserReviewCreateSub>
        </UserReviewCreateLeft>
        <UserReviewCreateRight>
          <UserReviewDataWrapper>
            <h5>가xxx님의 리뷰입니다</h5>
            <div>사이즈:260</div>
            <div>상품명:토토토</div>
          </UserReviewDataWrapper>
        </UserReviewCreateRight>
      </UserReviewCreateWrapper>
    </>
  );
};

export default ReviewCreateArea;

const UserReviewCreateWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 12rem;
  /* border: 1px solid red; */
  justify-content: space-between;
`;

const UserReviewCreateLeft = styled.div`
  display: flex;
  width: 70%;
  height: 12rem;
  border-bottom: 1px solid #dce1e8;
  flex-direction: column;
`;

const UserReviewCreateDate = styled.div`
  width: 100%;
  height: 2rem;
  display: flex;
  justify-content: space-between;
  border-right: 1px solid #dce1e8;
  margin-top: 1rem;
`;

const UserReviewCreate = styled.div`
  width: 100%;
  max-height: 6rem;
  overflow: scroll;
  font-size: 0.8rem;
  border-right: 1px solid #dce1e8;
  &::-webkit-scrollbar {
    width: 0;
  }
`;

const UserReviewCreateSub = styled.div`
  width: 100%;
  max-height: 2rem;
  display: flex;
  font-size: 0.8rem;
  white-space: nowrap;
  border-right: 1px solid #dce1e8;
`;

const UserReviewCreateUpDown = styled.div`
  display: flex;
  height: 100%;
  border-right: 1px solid #dce1e8;
`;

const UserReviewCreateUp = styled.div`
  display: flex;
  margin-right: 0.3rem;
  height: 100%;
  align-items: center;
  & > div {
    margin-right: 0.3rem;
  }
`;

const UserReviewCreateDown = styled.div`
  display: flex;
  margin-right: 0.3rem;
  height: 100%;
  align-items: center;
  & > div {
    margin-right: 0.3rem;
  }
`;

const UserReviewCreateComment = styled.div`
  display: flex;
  width: 50px;
  height: 100%;

  align-items: center;
  justify-content: center;
  & div {
    margin-right: 0.3rem;
  }
`;

const UserReviewCreateRight = styled.div`
  width: 30%;
  height: 12rem;
  /* background-color: greenyellow; */
  border-bottom: 1px solid #dce1e8;
`;

const UserReviewDataWrapper = styled.div`
  width: 80%;
  height: 10rem;
  margin: 1rem;
  & > h5 {
    margin-bottom: 0.6rem;
  }
  & > div {
    font-size: 0.6rem;
  }
`;
