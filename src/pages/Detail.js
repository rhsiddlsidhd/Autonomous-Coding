import styled from "styled-components";
const Detail = () => {
  return (
    <ProductDetail>
      <ProductImgContainer>
        <ProductImg>
          <img src="#" alt="이미지" />
        </ProductImg>
        <ProductBullet>
          <span>총알</span>
          <span>총알</span>
          <span>총알</span>
          <span>총알</span>
          <span>총알</span>
        </ProductBullet>
      </ProductImgContainer>
      <ProductDescription>
        <ProductInfoContainer>
          <BrandLogoContainer>
            <span>POLO</span>
            <button>♡</button>
            <span>
              브랜드관 <i class="fa-solid fa-chevron-right"></i>
            </span>
          </BrandLogoContainer>
          <ProductName>
            <h2>베어 자수 케일리 스커프 털 슬리퍼 / RFS11478W</h2>
          </ProductName>
          <div className="detail-sale">
            <div>
              <span>89,000원</span>
              <span>31%</span>
              <span>129,000원</span>
            </div>
            <div>
              <span>신규회원 가입 15% 쿠폰 적용가</span>
              <span>75,650원</span>
            </div>
          </div>
        </ProductInfoContainer>
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
        <SizeAmountContainer>
          <ProductSize>
            <span>사이즈</span>
            <ProductSizeSelector>
              <label for="size"></label>
              <ProductSizeSelectorBar id="size" name="size">
                <option value="size">사이즈</option>
                <option value="small">Small</option>
                <option value="medium">Medium</option>
                <option value="large">Large</option>
                <option value="xl">Extra Large</option>
              </ProductSizeSelectorBar>
              <ProductSizeArea>
                <ProductSizeAreaContentUp>
                  <div>220</div>
                  <button>X</button>
                </ProductSizeAreaContentUp>
                <ProductSizeAreaContentdown>
                  <div>
                    <button>-</button>
                    <div>1</div>
                    <button>+</button>
                  </div>
                  <div>89,000원</div>
                </ProductSizeAreaContentdown>
              </ProductSizeArea>
            </ProductSizeSelector>
          </ProductSize>
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
        </SizeAmountContainer>
      </ProductDescription>
    </ProductDetail>
  );
};

export default Detail;
// styled

const ProductDetail = styled.div`
  width: 80%;
  height: 100vh;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
`;

const ProductImgContainer = styled.div`
  width: 45%;
  height: 100vh;
`;

const ProductImg = styled.div`
  width: 100%;
  height: 85vh;
`;
const ProductBullet = styled.div`
  display: flex;
  justify-content: center;
`;

const ProductDescription = styled.div`
  width: 45%;
  height: 100vh;
`;

const ProductInfoContainer = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-bottom: 1px solid black;
`;

const BrandLogoContainer = styled.div`
  width: 100%;
  display: flex;
`;

const ProductName = styled.div`
  margin-top: 15px;
`;

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

const SizeAmountContainer = styled.div`
  width: 100%;
  height: 30%;
`;

const ProductSize = styled.div`
  border-bottom: 1px solid black;
  width: 100%;
  height: 70%;
  display: flex;
  justify-content: space-between;
  padding-top: 20px;
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const ProductSizeSelector = styled.div`
  width: 80%;
`;

const ProductSizeSelectorBar = styled.select`
  width: 90%;
  border: none;
  border-bottom: 1px solid gray;
`;

const ProductSizeArea = styled.div`
  width: 90%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  background-color: rgba(128, 128, 128, 0.678);
  margin-top: 12px;
`;

const ProductSizeAreaContentUp = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 10px 12px 10px;
  & button {
    width: 24px;
  }
`;

const ProductSizeAreaContentdown = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 10px 0 10px;
  & div:first-child {
    display: flex;
  }
  & div:first-child div {
    display: flex;
    justify-content: center;
    width: 24px;
  }
  & div:first-child button {
    width: 24px;
  }
`;

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
