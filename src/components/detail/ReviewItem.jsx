// ReviewItem.js

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faThumbsDown,
  faThumbsUp,
  faAngleDown,
} from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const ReviewItem = ({ review }) => {
  const anonymizeName = (name) => {
    return name && name.length > 1
      ? `${name[0]}${"*".repeat(name.length - 1)}`
      : name;
  };

  return (
    <ReviewItemWrapper>
      <ReviewItemLeft>
        <ReviewItemDate>
          <ReviewItemRating>
            {review.data.grade >= 1 && (
              <div>
                {[...Array(review.data.grade)].map((_, index) => (
                  <FontAwesomeIcon key={index} icon={faStar} />
                ))}
              </div>
            )}
            <h4>{review.data.grade}</h4>
          </ReviewItemRating>
          <div>{review.data.timestamp}</div>
        </ReviewItemDate>
        <ReviewItemContent>{review.data.message}</ReviewItemContent>
        <ReviewItemSub>
          <ReviewItemUpDown>
            <ReviewItemUp>
              <div>좋아요</div>
              <FontAwesomeIcon icon={faThumbsUp} />
            </ReviewItemUp>
            <ReviewItemDown>
              <div>싫어요</div>
              <FontAwesomeIcon icon={faThumbsDown} />
            </ReviewItemDown>
          </ReviewItemUpDown>
          <ReviewItemComment>
            <div>댓글</div>
            <FontAwesomeIcon icon={faAngleDown} />
          </ReviewItemComment>
        </ReviewItemSub>
      </ReviewItemLeft>
      <ReviewItemRight>
        <ReviewItemDataWrapper>
          <h5>{anonymizeName(review.data.name)}님의 리뷰입니다</h5>
          {/* 회원정보추가등록 */}
        </ReviewItemDataWrapper>
      </ReviewItemRight>
    </ReviewItemWrapper>
  );
};

const ReviewItemWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 12rem;
  justify-content: space-between;
`;

const ReviewItemLeft = styled.div`
  display: flex;
  width: 70%;
  height: 12rem;
  border-bottom: 1px solid #edf1f6;
  flex-direction: column;
`;

const ReviewItemDate = styled.div`
  width: 100%;
  height: 2rem;
  display: flex;
  justify-content: space-between;
  border-right: 1px solid #edf1f6;
  margin-top: 1rem;
  & > div:last-child {
    margin-right: 12px;
  }
`;

const ReviewItemRating = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  & > div:first-child {
    color: gold;
    margin-right: 12px;
  }
`;

const ReviewItemContent = styled.div`
  width: 100%;
  max-height: 6rem;
  overflow: scroll;
  font-size: 0.8rem;
  border-right: 1px solid #edf1f6;
  &::-webkit-scrollbar {
    width: 0;
  }
`;

const ReviewItemSub = styled.div`
  width: 100%;
  max-height: 2rem;
  display: flex;
  font-size: 0.8rem;
  white-space: nowrap;
  border-right: 1px solid #edf1f6;
`;

const ReviewItemUpDown = styled.div`
  display: flex;
  height: 100%;
  border-right: 1px solid #edf1f6;
`;

const ReviewItemUp = styled.div`
  display: flex;
  align-items: center;
  margin-right: 0.3rem;
  height: 100%;

  & > div {
    margin-right: 0.3rem;
  }
`;

const ReviewItemDown = styled.div`
  display: flex;
  align-items: center;
  margin-right: 0.3rem;
  height: 100%;

  & > div {
    margin-right: 0.3rem;
  }
`;

const ReviewItemComment = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 100%;
  & div {
    margin-right: 0.3rem;
  }
`;

const ReviewItemRight = styled.div`
  width: 30%;
  height: 12rem;
  border-bottom: 1px solid #edf1f6;
`;

const ReviewItemDataWrapper = styled.div`
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

export default ReviewItem;
