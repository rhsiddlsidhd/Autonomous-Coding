import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { styled } from "styled-components";

const ProductInfo = ({ cost, discountPercentage }) => {
  const disCountPrice = cost - (cost * discountPercentage) / 100;

  //쿠폰 할인하면 정수값이 76755원 나와서 7675.5 까지 소수점 옮겨서 소수점 아래 숫자들은 floor로 날려버리기
  const CouponPrice =
    Math.floor((disCountPrice - (disCountPrice * 15) / 100) / 10) * 10;

  return (
    <>
      <ProductInfoContainer>
        <BrandLogoContainer>
          <span>POLO</span>
          <button>♡</button>
          <span>
            <FontAwesomeIcon icon={faChevronRight} />
          </span>
        </BrandLogoContainer>
        <ProductName>
          <h2>베어 자수 케일리 스커프 털 슬리퍼 / RFS11478W</h2>
        </ProductName>
        <DisCountcontainer>
          <div>
            <span style={{ fontWeight: "bold", fontSize: "18px" }}>
              {disCountPrice}원
            </span>
            <span style={{ fontWeight: "bold", color: "red" }}>
              {discountPercentage}%
            </span>
            <span style={{ textDecoration: "line-through" }}>{cost}원</span>
          </div>
          <div>
            <span style={{ marginRight: "10px" }}>
              신규회원 가입 15% 쿠폰 적용가
            </span>
            <span style={{ fontWeight: "bold", fontSize: "18px" }}>
              {CouponPrice}원
            </span>
          </div>
        </DisCountcontainer>
      </ProductInfoContainer>
    </>
  );
};

export default ProductInfo;

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

const DisCountcontainer = styled.div`
  & div:first-child span {
    margin-right: 10px;
  }
`;
