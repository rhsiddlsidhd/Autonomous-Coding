import { styled } from "styled-components";

const SizeSelect = () => {
  return (
    <>
      <ProductSize>
        <span>사이즈</span>
        <ProductSizeSelector>
          <label htmlFor="size"></label>
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
    </>
  );
};

export default SizeSelect;

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
