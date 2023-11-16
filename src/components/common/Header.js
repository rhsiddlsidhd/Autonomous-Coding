import { useState } from "react";

const Header = () => {
  const [brandView, setBrandView] = useState(false);
  const [shoesView, setShoesView] = useState(false);
  const [kidsView, setKidsView] = useState(false);
  const brandToggleView = () => {
    return setBrandView(!brandView);
  };

  const shoesToggleView = () => {
    return setShoesView(!shoesView);
  };

  const kidsToggleView = () => {
    return setKidsView(!kidsView);
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
                            <li>4</li>
                            <li>5</li>
                            <li>6</li>
                          </ul>
                        </li>
                        <li className="sub-wrap-two-list-threetitle">
                          <span>슬리퍼</span>
                          <ul>
                            <li>7</li>
                            <li>8</li>
                            <li>9</li>
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
            <h2>
              <i class="fa-solid fa-user"></i>
            </h2>
            <h2>
              <i class="fa-solid fa-cart-shopping"></i>
            </h2>
          </div>
          <div className="header_right-search">
            <input type="text" placeholder="##24시간이 모자라" />
            <i class="fa-solid fa-magnifying-glass"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
