import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { styled } from "styled-components";

const ProductImage = ({ data }) => {
  // console.log("여기", data.Imgs);

  const imgList = data.Imgs;

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? imgList.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === imgList.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <>
      <ProductImg>
        {/* public 요소에 Images 폴더 안 이미지 파일 불러오기 */}
        <img
          src={process.env.PUBLIC_URL + imgList[currentIndex]}
          alt="이미지"
        />

        <NavigationButton>
          <Button onClick={handlePrev}>
            <FontAwesomeIcon icon={faChevronLeft} />
          </Button>
          <Button onClick={handleNext}>
            <FontAwesomeIcon icon={faChevronRight} />
          </Button>
        </NavigationButton>
      </ProductImg>
      <ProductBullet>
        {imgList.map((it, index) => (
          <label key={index}>
            <CustomBullet
              type="radio"
              name="shoesImg"
              checked={index === currentIndex}
              onChange={() => setCurrentIndex(index)}
            />
          </label>
        ))}
      </ProductBullet>
    </>
  );
};

export default ProductImage;

const ProductImg = styled.div`
  position: relative;
  width: 100%;
  height: 85vh;
  overflow: hidden;
  & img {
    width: 100%;
    height: 85vh;
    object-fit: cover;
  }
`;

const NavigationButton = styled.div`
  position: absolute;
  width: 100%;
  display: flex;
  justify-content: space-between;
  top: 50%;
  transform: translateY(-50%);
`;

const Button = styled.button`
  width: 50px;
  height: 50px;
  background-color: transparent;
  border: none;
  font-size: 24px;
`;

const ProductBullet = styled.div`
  display: flex;
  justify-content: center;
`;

const CustomBullet = styled.input`
  width: 10px;
  height: 10px;
  background-color: ${(item) => (item.checked ? "#007bff" : "#ccc")};
  border-radius: 50%;
  margin: 0 5px;
  cursor: pointer;
  appearance: none;
`;
