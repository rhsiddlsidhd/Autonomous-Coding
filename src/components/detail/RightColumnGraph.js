import { styled } from "styled-components";

const RightColumnGraph = ({ graphData, reviewPopulationCount }) => {
  if (!graphData || graphData.length === 0) {
    // 만약 graphData가 없는 경우 기본 UI 또는 메시지를 렌더링
    return <div>No data available.</div>;
  }

  return (
    <>
      <RightColumn>
        <ProgressBarItems>
          <span>아주 좋아요</span>
          <div className="progressBar">
            <div
              className="progress"
              style={{ width: `${graphData.veryGood}%` }}
            ></div>
          </div>
          <span>{reviewPopulationCount.veryGood}</span>
        </ProgressBarItems>
        <ProgressBarItems>
          <span>맘에 들어요</span>
          <div className="progressBar">
            <div
              className="progress"
              style={{ width: `${graphData.like}%` }}
            ></div>
          </div>
          <span>{reviewPopulationCount.like}</span>
        </ProgressBarItems>
        <ProgressBarItems>
          <span>보통이에요</span>
          <div className="progressBar">
            <div
              className="progress"
              style={{ width: `${graphData.average}%` }}
            ></div>
          </div>
          <span>{reviewPopulationCount.average}</span>
        </ProgressBarItems>
        <ProgressBarItems>
          <span>그저 그래요</span>
          <div className="progressBar">
            <div
              className="progress"
              style={{ width: `${graphData.soSo}%` }}
            ></div>
          </div>
          <span>{reviewPopulationCount.soSo}</span>
        </ProgressBarItems>
        <ProgressBarItems>
          <span>별로에요</span>
          <div className="progressBar">
            <div
              className="progress"
              style={{ width: `${graphData.notGood}%` }}
            ></div>
          </div>
          <span>{reviewPopulationCount.notGood}</span>
        </ProgressBarItems>
      </RightColumn>
    </>
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
  & span:first-child {
    display: flex;
    justify-content: end;
    width: 20%;
    margin-right: 10px;
  }

  & .progressBar {
    width: 70%;
    height: 100%;
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
    margin-left: 10px;
  }
`;
