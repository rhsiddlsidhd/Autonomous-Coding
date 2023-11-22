import { styled } from "styled-components";
import ProductImage from "./ProductImage";
import ProductInfo from "./ProductInfo";
import ProductReviewSale from "./ProductReviewSale";
import SizeSelect from "./SizeSelect";
import TotalPaymentAmount from "./TotalPaymentAmount";

const ProductDetailSection = ({ data }) => {
  //Info에 들어갈 데이터 Price 가공
  const cost = data.Price;
  const discountPercentage = data.Percentage;

  return (
    <>
      <ProductImgContainer>
        <ProductImage data={data} />
      </ProductImgContainer>
      <ProductDescription>
        <ProductInfo cost={cost} discountPercentage={discountPercentage} />
        <ProductReviewSale />
        <SizeAmountContainer>
          <SizeSelect />
          <TotalPaymentAmount />
        </SizeAmountContainer>
      </ProductDescription>
    </>
  );
};

export default ProductDetailSection;

const ProductImgContainer = styled.div`
  width: 45%;
  height: 100vh;
`;

const ProductDescription = styled.div`
  width: 45%;
  height: 100vh;
`;

const SizeAmountContainer = styled.div`
  width: 100%;
  height: 30%;
`;
