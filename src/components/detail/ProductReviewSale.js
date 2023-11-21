import styled from "styled-components";

const ProductReviewSale = () => {
  return (
    <>
      <ReviewSaleContainer>
        <div>
          <span>상품리뷰</span>
          <span>☆☆☆☆☆</span>
          <span>4.9</span>
          <span>
            <a href="#">360건</a>
          </span>
        </div>
        <div>
          <span>배송 정보</span>
          <span>2,500원(30,000원 이상 구매 시 무료배송)</span>
        </div>
        <div>
          <span>카드혜택안내</span>
          <span>카드혜택보기</span>
        </div>
        <div>
          <span>폴더 포인트</span>
          <span>회원 구매 시 890포인트 적립예정</span>
        </div>
      </ReviewSaleContainer>
    </>
  );
};

export default ProductReviewSale;

const ReviewSaleContainer = styled.div`
  width: 100%;
  height: 30%;
  border-bottom: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  & > div > span:first-child {
    margin-right: 10px;
    background-color: bisque;
  }
  & > div:first-child > span {
    margin-right: 10px;
  }
`;
