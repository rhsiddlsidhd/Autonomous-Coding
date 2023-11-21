import { styled } from "styled-components";
import ProductImage from "./ProductImage";
import ProductInfo from "./ProductInfo";
import ProductReviewSale from "./ProductReviewSale";
import SizeSelect from "./SizeSelect";
import TotalPaymentAmount from "./TotalPaymentAmount";

const ProductDetailSection = () => {
  return (
    <>
      <ProductImgContainer>
        <ProductImage />
      </ProductImgContainer>
      <ProductDescription>
        <ProductInfo />
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
