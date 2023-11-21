import styled from "styled-components";
import ProductDetailSection from "../components/detail/ProductDetailSection";
const Detail = () => {
  return (
    <ProductDetail>
      <ProductDetailSection />
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
