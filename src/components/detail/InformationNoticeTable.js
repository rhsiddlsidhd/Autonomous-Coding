import { styled } from "styled-components";

const InformationNoticeTable = () => {
  return (
    <>
      <NoticeTable>
        <tbody>
          <tr>
            <th>STYLE</th>
            <td>FLLOCF3U01</td>
          </tr>
          <tr>
            <th>제품 소재</th>
            <td>겉감: 폴리에스터 100% 안감: 폴리에스터 100% 창: EVA 100%</td>
          </tr>
          <tr>
            <th>색상</th>
            <td>(35)Beige</td>
          </tr>
          <tr>
            <th>제조국</th>
            <td>중국</td>
          </tr>
          <tr>
            <th>취급시 주의사항</th>
            <td>상품 TAG 참고 / 소비자 부주의로 인한 제품 손상 보상 불가</td>
          </tr>
          <tr>
            <th style={{ borderBottom: "none" }}>품질보증기준</th>
            <td style={{ borderBottom: "none" }}>
              전자상거래법 및 공정거래위원회 고시 내 소비자 분쟁해결기준에 따름
            </td>
          </tr>
        </tbody>
      </NoticeTable>
    </>
  );
};

export default InformationNoticeTable;

const NoticeTable = styled.table`
  width: 100%;

  margin: 60px 0 60px 0;
  /* border: 1px solid black; */
  border-top: 1px solid black;
  border-bottom: 1px solid #e1e1e1;
  & tbody {
    width: 100%;
    height: 250px;
    & tr th {
      width: 30%;
      border-right: 1px solid #e1e1e1;
      border-bottom: 1px solid #e1e1e1;
      background-color: #f8f8f8;
      text-align: start;
      font-size: 12px;
      padding-left: 14px;
    }
    & td {
      border-bottom: 1px solid #e1e1e1;
      padding-left: 14px;
      font-size: 12px;
    }
  }
`;
