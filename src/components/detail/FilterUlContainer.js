import { styled } from "styled-components";
import {
  faChevronDown,
  faChevronUp,
  faRepeat,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useRef, useEffect } from "react";

export const ScopeUl = () => {
  const [scopeView, setScopeView] = useState(false);

  const toggleScopeView = () => {
    setScopeView(!scopeView);
    console.log(scopeView);
  };

  //Dropdown 닫히기 기능
  const dropdownRef = useRef(null);

  const closeDropdown = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setScopeView(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", closeDropdown);

    return () => {
      document.removeEventListener("mousedown", closeDropdown);
    };
  }, []);
  //
  return (
    <>
      <Scope>
        <ScopeButtonContainer onClick={toggleScopeView}>
          <ScopeName>별점</ScopeName>
          {scopeView ? (
            <FontAwesomeIcon icon={faChevronUp} />
          ) : (
            <FontAwesomeIcon icon={faChevronDown} />
          )}
        </ScopeButtonContainer>
        {scopeView && (
          <ScopeDropDownContainer ref={dropdownRef}>
            <ScopeDropDownHeader>
              <span>별점</span>
              <div>
                <FontAwesomeIcon icon={faRepeat} />
                <button>초기화</button>
              </div>
            </ScopeDropDownHeader>
            <ScopeDropDownContent>
              <li>
                <label htmlFor="verygood">아주좋아요</label>
                <input type="checkbox" id="verygood" />
              </li>
              <li>
                <label htmlFor="like">맘에 들어요</label>
                <input type="checkbox" id="like" />
              </li>
              <li>
                <label htmlFor="average">보통이에요</label>
                <input type="checkbox" id="average" />
              </li>
              <li>
                <label htmlFor="soso">그냥그래요</label>
                <input type="checkbox" id="soso" />
              </li>
              <li>
                <label htmlFor="notgood">별로에요</label>
                <input type="checkbox" id="notgood" />
              </li>
            </ScopeDropDownContent>
            <CompleteBotton>완료</CompleteBotton>
          </ScopeDropDownContainer>
        )}
      </Scope>
    </>
  );
};

const Scope = styled.div`
  width: 5rem;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: relative;
`;

const ScopeDropDownContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 18rem;
  height: 22rem;
  position: absolute;
  top: 3rem;
  left: 0;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;
  border-radius: 10px;
  background-color: white;
`;

const ScopeDropDownHeader = styled.div`
  width: 80%;
  height: 10%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  & > span {
    font-weight: bold;
  }
  & > div > svg {
    color: #c5c7cb;
    font-size: 0.65rem;
    margin-right: 0.25rem;
  }
  & > div > button {
    border: none;
    background-color: transparent;
    cursor: pointer;
    height: 100%;
    &:hover {
      font-weight: bold;
    }
  }
`;

const ScopeDropDownContent = styled.ul`
  width: 80%;
  height: 65%;
  & > li {
    width: 100%;
    height: 20%;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #edf1f6;
    & > label,
    & > input {
      height: 100%;
      display: flex;
      align-items: center;
      font-size: 0.75rem;
    }
  }
`;

const ScopeButtonContainer = styled.div`
  width: 80%;
  height: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #edf1f6;
  &:hover {
    border: 1px solid black;
  }
  & > svg {
    font-size: 0.75rem;
  }
`;

const ScopeName = styled.span`
  height: 65%;
  display: flex;
  align-items: center;
  margin-right: 0.25rem;
`;

const CompleteBotton = styled.button`
  border: none;
  width: 80%;
  height: 15%;
  background-color: #14161a;
  color: #e0e3e2;
  &:hover {
    opacity: 0.7;
  }
  border-radius: 10px;
`;

export const FootSizeUl = () => {
  const [footSizeView, setFootSizeView] = useState(false);

  const toggleFootSizeView = () => {
    setFootSizeView(!footSizeView);
  };

  //Dropdown 닫히기 기능
  const dropdownRef = useRef(null);

  const closeDropdown = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setFootSizeView(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", closeDropdown);

    return () => {
      document.removeEventListener("mousedown", closeDropdown);
    };
  }, []);
  //
  return (
    <>
      <FootSize>
        <FootSizeButtonContainer onClick={toggleFootSizeView}>
          <FootSizeName>발사이즈</FootSizeName>
          {footSizeView ? (
            <FontAwesomeIcon icon={faChevronUp} />
          ) : (
            <FontAwesomeIcon icon={faChevronDown} />
          )}
        </FootSizeButtonContainer>
        {footSizeView && (
          <FootSizeDropDownContainer ref={dropdownRef}>
            <FootSizeDropDownHeader>
              <span>발사이즈</span>
              <div>
                <FontAwesomeIcon icon={faRepeat} />
                <button>초기화</button>
              </div>
            </FootSizeDropDownHeader>
            <FootSizeDropDowncontent>
              <li>225</li>
              <li>225</li>
              <li>225</li>
              <li>225</li>
              <li>225</li>
              <li>225</li>
              <li>225</li>
              <li>225</li>
              <li>225</li>
            </FootSizeDropDowncontent>
            <CompleteBotton>완료</CompleteBotton>
          </FootSizeDropDownContainer>
        )}
      </FootSize>
    </>
  );
};

const FootSize = styled.div`
  width: 7.5rem;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: relative;
  z-index: 1;
`;

const FootSizeDropDownContainer = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 22rem;
  height: 18rem;
  position: absolute;
  top: 3rem;
  left: 0;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;
  border-radius: 10px;
  background-color: white;
`;

const FootSizeDropDownHeader = styled.div`
  width: 80%;
  height: 10%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  & > span {
    font-weight: bold;
  }
  & > div > svg {
    color: #c5c7cb;
    font-size: 0.65rem;
    margin-right: 0.25rem;
  }
  & > div > button {
    border: none;
    background-color: transparent;
    cursor: pointer;
    height: 100%;
    &:hover {
      font-weight: bold;
    }
  }
`;

const FootSizeDropDowncontent = styled.ul`
  width: 80%;
  height: 65%;
  border-bottom: 1px solid #edf1f6;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 5px;
  grid-auto-rows: 40px;
  grid-auto-flow: row;
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }

  & > li {
    width: 2.5rem;
    height: 2rem;
    border: 1px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px 10px 10px 0;
  }
`;

const FootSizeButtonContainer = styled.div`
  width: 80%;
  height: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #edf1f6;
  &:hover {
    border: 1px solid black;
  }
  & svg {
    font-size: 0.75rem;
  }
`;

const FootSizeName = styled.span`
  height: 65%;
  display: flex;
  align-items: center;
  margin-right: 0.25rem;
`;
