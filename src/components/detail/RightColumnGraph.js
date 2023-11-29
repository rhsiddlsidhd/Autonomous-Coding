import { styled } from "styled-components";

const ProgressBar = ({ label, value, populationCount, style }) => (
  <ProgressBarItems style={style}>
    <span>{label}</span>
    <div className="progressBar">
      <div className="progress" style={{ width: `${value}%` }}></div>
    </div>
    <span>{populationCount}</span>
  </ProgressBarItems>
);

const RightColumnGraph = ({ graphData, reviewPopulationCount }) => {
  //graphData의 객체에서 가장 큰 데이터 가져오기 (Objuct.keys(obj) 메서드)
  const maxGrade = Object.keys(graphData).reduce((a, b) =>
    graphData[a] > graphData[b] ? a : b
  );

  return (
    <RightColumn>
      {Object.keys(graphData).map((key) => {
        const labels = {
          veryGood: "아주 좋아요",
          like: "맘에 들어요",
          average: "보통이에요",
          soSo: "그저 그래요",
          notGood: "별로에요",
        };
        const label = labels[key];

        return (
          <ProgressBar
            key={key}
            label={label}
            value={graphData[key]}
            populationCount={reviewPopulationCount[key]}
            style={{
              fontWeight: key === maxGrade ? "bold" : "normal",
              color: key === maxGrade ? "black" : "#A4A7AE",
            }}
          />
        );
      })}
    </RightColumn>
  );
};

export default RightColumnGraph;

const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 60%;
  height: 60%;
`;

const ProgressBarItems = styled.div`
  display: flex;
  width: 100%;
  align-items: center;

  & span:first-child {
    display: flex;
    justify-content: end;
    width: 20%;
    font-size: 12px;
    margin-right: 10px;
  }

  & .progressBar {
    width: 70%;
    height: 50%;
    background-color: #ebeff5;
    border-radius: 10px;
    & .progress {
      height: 100%;
      padding: 0;
      text-align: center;
      background-color: #14161a;
      border-radius: 10px;
    }
  }
  & span:last-child {
    width: 10%;
    font-size: 12px;
    margin-left: 10px;
  }
`;
