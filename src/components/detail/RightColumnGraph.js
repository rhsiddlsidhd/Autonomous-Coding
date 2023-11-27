import { styled } from "styled-components";

const RightColumnGraph = () => {
  return (
    <>
      <RightColumn>
        <ProgressBarItems>
          <span>아주 좋아요</span>
          <div className="progressBar">
            <div className="progress"></div>
          </div>
          <span>몇명</span>
        </ProgressBarItems>
        <ProgressBarItems>
          <span>맘에 들어요</span>
          <div className="progressBar">
            <div className="progress"></div>
          </div>
          <span>몇명</span>
        </ProgressBarItems>
        <ProgressBarItems>
          <span>보통이에요</span>
          <div className="progressBar">
            <div className="progress"></div>
          </div>
          <span>몇명</span>
        </ProgressBarItems>
        <ProgressBarItems>
          <span>그저 그래요</span>
          <div className="progressBar">
            <div className="progress"></div>
          </div>
          <span>몇명</span>
        </ProgressBarItems>
        <ProgressBarItems>
          <span>별로에요</span>
          <div className="progressBar">
            <div className="progress"></div>
          </div>
          <span>몇명</span>
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
  }

  & .progressBar {
    width: 70%;
    height: 100%;
    background-color: gray;
    border-radius: 10px;
    & .progress {
      width: 72%; // 나타내고자 하는 퍼센트 값을 넣으면 됩니다.
      height: 100%;
      padding: 0;
      text-align: center;
      background-color: #4f98ff;
      border-radius: 10px;
      color: #111;
    }
  }
  & span:last-child {
    width: 10%;
  }
`;
