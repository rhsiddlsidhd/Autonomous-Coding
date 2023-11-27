import styled from "styled-components";
import ProductDetailSection from "../components/detail/ProductDetailSection";
import { useState, useEffect } from "react";
import InformationNoticeTable from "../components/detail/InformationNoticeTable";
import ReviewTab from "../components/detail/ReviewTab";
// import { database } from "../firebase";
// import { db } from "../firebase";
// import { addDoc, collection } from "firebase/firestore";

const Detail = () => {
  const [data, setData] = useState([]);
  const [view, setView] = useState("information");

  const handleTabClick = (tab) => {
    setView(tab);
  };

  //목데이터

  const randomId = () => {
    return Math.random().toString(36).substr(2, 16);
  };

  const product = {
    Id: randomId(),
    Name: "베어 자수 케일리 스커프 털 슬리퍼",
    Code: "RFS11478W",
    Price: 129000,
    Percentage: 30,
    Size: [220, 225, 230, 235, 240, 245, 250],
    Imgs: [
      process.env.PUBLIC_URL + `/Images/shoes1.jpg`,
      process.env.PUBLIC_URL + `/Images/shoes2.jpg`,
      process.env.PUBLIC_URL + `/Images/shoes3.jpg`,
    ],
  };

  //check
  // console.log("여기요", isNaN(product.sale));

  useEffect(() => {
    setData(product);
  }, []);

  //information 이미지
  const newData = data.Imgs || [];

  //switch문
  let content;
  switch (view) {
    case "review":
      content = <ReviewTab />;
      break;
    case "inquiry":
      content = "상품문의 콘텐츠";
      break;
    case "return":
      content = "반품 콘텐츠";
      break;
    default:
      content = (
        <>
          <InformationTabImg>
            {newData.map((image, index) => (
              <img key={index} src={image} alt="이미지" />
            ))}
          </InformationTabImg>
          <InformationNoticeTable />
        </>
      );
  }
  //veiw 값에 따라서 content 변수에 다른값을 할당

  return (
    <div>
      <ProductDetail>
        <ProductDetailSection data={data} />
      </ProductDetail>
      <ProductDetailTab>
        <ul>
          <li
            onClick={() => handleTabClick("information")}
            className={view === "information" ? "active" : ""}
          >
            상품정보
          </li>
          <li
            onClick={() => handleTabClick("review")}
            className={view === "review" ? "active" : ""}
          >
            상품후기
          </li>
          <li
            onClick={() => handleTabClick("inquiry")}
            className={view === "inquiry" ? "active" : ""}
          >
            상품문의
          </li>
          <li
            onClick={() => handleTabClick("return")}
            className={view === "return" ? "active" : ""}
          >
            반품
          </li>
        </ul>
        <ProductDetailTabContent>{content}</ProductDetailTabContent>
      </ProductDetailTab>
    </div>
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

const ProductDetailTab = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* background-color: gray; */
  & ul {
    margin-top: 60px;
    width: 80%;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    border-bottom: 1px solid #e1e1e1;
    & li {
      display: flex;
      width: 100%;
      justify-content: center;
    }
  }
`;

const ProductDetailTabContent = styled.div`
  margin-top: 60px;
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const InformationTabImg = styled.div`
  width: 50%;
  & img {
    width: 100%;
    margin-bottom: 10px;
  }
`;
