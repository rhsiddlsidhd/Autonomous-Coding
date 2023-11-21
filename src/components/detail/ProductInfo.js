import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { styled } from "styled-components";

const ProductInfo = () => {
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
