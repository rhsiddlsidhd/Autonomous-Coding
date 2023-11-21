import styled from "styled-components";
import ProductDetailSection from "../components/detail/ProductDetailSection";
import { useState, useEffect } from "react";
const Detail = () => {
  const [data, setData] = useState([]);

  //목데이터

  const randomId = () => {
    return Math.random().toString(36).substr(2, 16);
  };

  const product = {
    Id: randomId(),
    Name: "베어 자수 케일리 스커프 털 슬리퍼",
    Code: "RFS11478W",
    Price: 129000,
    Size: [220, 225, 230, 235, 240, 245, 250],
    Imgs: [
      process.env.PUBLIC_URL + `/Images/shoes1.jpg`,
      process.env.PUBLIC_URL + `/Images/shoes2.jpg`,
      process.env.PUBLIC_URL + `/Images/shoes3.jpg`,
    ],
  };

  useEffect(() => {
    setData(product);
  }, []);

  return (
    <ProductDetail>
      <ProductDetailSection data={data} />
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
