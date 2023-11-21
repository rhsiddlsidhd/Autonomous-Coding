import { styled } from "styled-components";

const ProductImage = () => {
  return (
    <>
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
    </>
  );
};

export default ProductImage;

const ProductImg = styled.div`
  width: 100%;
  height: 85vh;
`;
const ProductBullet = styled.div`
  display: flex;
  justify-content: center;
`;
