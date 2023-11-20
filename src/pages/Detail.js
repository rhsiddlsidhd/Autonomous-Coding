import styled from "styled-components";
const Detail = () => {
  return (
    <div className="detail">
      <div className="detail-left">
        <div className="detail-left-img">
          <img src="#" alt="이미지" />
        </div>
        <div className="detail-left-bullet">
          <span>총알</span>
          <span>총알</span>
          <span>총알</span>
          <span>총알</span>
          <span>총알</span>
        </div>
      </div>
      <div className="detail-right">
        <div className="detail-logo-productname">
          <div className="detail-logo">
            <span>POLO</span>
            <button>♡</button>
            <span>
              브랜드관 <i class="fa-solid fa-chevron-right"></i>
            </span>
          </div>
          <div className="detail-productname">
            <h2>베어 자수 케일리 스커프 털 슬리퍼 / RFS11478W</h2>
          </div>
          <div className="detail-sale">
            <div>
              <span>89,000원</span>
              <span>31%</span>
              <span>129,000원</span>
            </div>
            <div>
              <span>신규회원 가입 15% 쿠폰 적용가</span>
              <span>75,650원</span>
            </div>
          </div>
        </div>
        <div className="detail-review-point">
          <div>
            <span>상품리뷰</span>
            <span>☆☆☆☆☆</span>
            <span>4.9</span>
            <span>
              <a href="#">360건</a>
            </span>
          </div>
          <div>
            <span>배송 정보</span>
            <span>2,500원(30,000원 이상 구매 시 무료배송)</span>
          </div>
          <div>
            <span>카드혜택안내</span>
            <span>카드혜택보기</span>
          </div>
          <div>
            <span>폴더 포인트</span>
            <span>회원 구매 시 890포인트 적립예정</span>
          </div>
        </div>
        <div className="detail-size-button">
          <div className="detail-size">
            <span>사이즈</span>
            <div className="size-selector">
              <label for="size"></label>
              <select id="size" name="size">
                <option value="size">사이즈</option>
                <option value="small">Small</option>
                <option value="medium">Medium</option>
                <option value="large">Large</option>
                <option value="xl">Extra Large</option>
              </select>
              <div className="size-area">
                <div className="size-area-up">
                  <div>220</div>
                  <button>X</button>
                </div>
                <div className="size-area-down">
                  <div>
                    <button>-</button>
                    <div>1</div>
                    <button>+</button>
                  </div>
                  <div>89,000원</div>
                </div>
              </div>
            </div>
          </div>
          <div className="amout-wrapper">
            <div className="amount">
              <span>총 결제금액</span>
              <h2>89,000원</h2>
            </div>
            <div className="amount-button">
              <button className="amount-button-good">♡</button>
              <button className="amount-button-cart">CART</button>
              <button className="amount-button-buy">BUY NOW</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
// styled
