import { styled } from "styled-components";

const TotalPaymentAmount = () => {
  return (
    <>
      <div>
        <Amount>
          <span>총 결제금액</span>
          <h2>89,000원</h2>
        </Amount>
        <AmountButton>
          <GoodButton>♡</GoodButton>
          <CartButton>CART</CartButton>
          <BuyButton>BUY NOW</BuyButton>
        </AmountButton>
      </div>
    </>
  );
};

export default TotalPaymentAmount;

const Amount = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
  & h2 {
    margin-left: 10px;
  }
`;
const AmountButton = styled.div`
  width: 100%;
  height: 6vh;
  display: flex;
  justify-content: space-between;
`;

const GoodButton = styled.button`
  width: 10%;
  height: 100%;
  border: none;
  &:hover {
    background-color: deeppink;
  }
`;

const CartButton = styled.button`
  width: 43%;
  height: 100%;
  border: none;
  background-color: gray;
  color: beige;
  &:hover {
    background-color: beige;
    color: gray;
  }
`;

const BuyButton = styled.button`
  width: 43%;
  height: 100%;
  border: none;
  background-color: rgb(92, 92, 212);
  color: beige;
  &:hover {
    background-color: beige;
    color: rgb(92, 92, 212);
  }
`;
