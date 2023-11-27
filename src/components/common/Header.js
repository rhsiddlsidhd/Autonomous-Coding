import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faMagnifyingGlass,
  faRightFromBracket,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { styled } from "styled-components";
import { auth } from "../../firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Header = ({ isLogin, handleLogin }) => {
  const [brandView, setBrandView] = useState(false);
  const [shoesView, setShoesView] = useState(false);
  const [kidsView, setKidsView] = useState(false);
  const [loginIconView, setLoginIconView] = useState(false);

  const navigate = useNavigate();
  const brandToggleView = () => {
    return setBrandView(!brandView);
  };

  const shoesToggleView = () => {
    return setShoesView(!shoesView);
  };

  const kidsToggleView = () => {
    return setKidsView(!kidsView);
  };

  const loginIconToggledView = () => {
    setLoginIconView(!loginIconView);
  };

  //로그아웃

  const loginout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        console.log("로그아웃");
        localStorage.removeItem("userToken");
        alert("로그아웃되었습니다");
        handleLogin();
        //로그아웃후 이동
        navigate("/login");
      })
      .catch((error) => {
        // An error happened.
        console.error("로그아웃실패", error);
      });
  };

  return (
    <div className="header">
      <div className="header-container">
        <div className="header_left">
          <h2 className="header_left-logo">SHOES</h2>
          <nav className="nav_wrap">
            <ul className="nav_wrap-brand">
              <li className="nav_wrap-brand-new">
                <span>NEW</span>
              </li>
              <li className="nav_wrap-brand-best">
                <span>BEST</span>
              </li>
              <li className="nav_wrap-brand-brand">
                <span onClick={brandToggleView}>BRAND</span>
                {brandView && (
                  <div className="sub">
                    <div className="sub-wrap">
                      <h2 className="sub-wrap-one-title">BRAND</h2>
                      <ul className="sub-wrap-one-list">
                        <li>나이키</li>
                        <li>아디다스</li>
                        <li>뉴발란스</li>
                      </ul>
                    </div>
                  </div>
                )}
              </li>
              <li className="nav_wrap-brand-shoes">
                <span onClick={shoesToggleView}>SHOES</span>
                {shoesView && (
                  <div className="sub">
                    <div className="sub-wrap">
                      <h2 className="sub-wrap-two-title">SHOES</h2>
                      <ul className="sub-wrap-two-list">
                        <li className="sub-wrap-two-list-onetitle">
                          <span>운동화</span>
                          <ul>
                            <li>
                              <span>1</span>
                            </li>
                            <li>
                              <span>2</span>
                            </li>
                            <li>
                              <span>3</span>
                            </li>
                          </ul>
                        </li>
                        <li className="sub-wrap-two-list-twotitle">
                          <span>부츠</span>
                          <ul>
                            <li>
                              <span>4</span>
                            </li>
                            <li>
                              <span>5</span>
                            </li>
                            <li>
                              <span>6</span>
                            </li>
                          </ul>
                        </li>
                        <li className="sub-wrap-two-list-threetitle">
                          <span>슬리퍼</span>
                          <ul>
                            <li>
                              <span>7</span>
                            </li>
                            <li>
                              <span>8</span>
                            </li>
                            <li>
                              <span>9</span>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>
                )}
              </li>
              <li className="nav_wrap-brand-kids">
                <span onClick={kidsToggleView}>KIDS</span>
                {kidsView && (
                  <div className="sub">
                    <div className="sub-wrap">
                      <h2 className="sub-wrap-three-title">KIDS</h2>
                    </div>
                  </div>
                )}
              </li>
            </ul>
            <ul className="nav_wrap-event">
              <li>
                <span>EVENT</span>
              </li>
              <li>
                <span>LAUNCH</span>
              </li>
              <li>
                <span>REVIEW</span>
              </li>
              <li>
                <span>AI추천</span>
              </li>
            </ul>
          </nav>
        </div>
        <div className="header_right">
          <div className="header_right-icon-wrap">
            {isLogin ? (
              <LoginIcon>
                <h2>
                  <FontAwesomeIcon
                    className="faRightFromBracket"
                    icon={faRightFromBracket}
                    onClick={loginIconToggledView}
                  />
                </h2>

                {loginIconView && (
                  <ul>
                    <li>회원정보 관리</li>
                    <li>
                      <button
                        style={{
                          border: "none",
                          fontSize: "16px",
                          fontWeight: "bold",
                          backgroundColor: "white",
                        }}
                        onClick={loginout}
                      >
                        로그아웃
                      </button>
                    </li>
                  </ul>
                )}
              </LoginIcon>
            ) : (
              <LoginIcon>
                <h2>
                  <FontAwesomeIcon
                    className="faUser"
                    icon={faUser}
                    onClick={loginIconToggledView}
                  />
                </h2>

                {loginIconView && (
                  <ul>
                    <li
                      onClick={() => navigate("/login")}
                      style={{ cursor: "pointer" }}
                    >
                      로그인
                    </li>
                  </ul>
                )}
              </LoginIcon>
            )}

            <h2>
              <FontAwesomeIcon icon={faCartShopping} />
            </h2>
          </div>
          <div className="header_right-search">
            <input type="text" placeholder="##24시간이 모자라" />
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

const LoginIcon = styled.div`
  position: relative;
  & ul {
    position: absolute;
    border: 1px solid red;
    z-index: 1;
    width: 110px;
    height: fit-content;
    background-color: white;
  }
  & ul li {
    font-weight: bold;
  }
`;
