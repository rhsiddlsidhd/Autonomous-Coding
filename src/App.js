import "./App.css";
import Header from "./components/common/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./pages/Cart";
import Detail from "./pages/Detail";
import Login from "./pages/Login";
import { useState, useEffect } from "react";
import { signOut } from "firebase/auth";
import { auth } from "./firebase";
import { ThemeProvider } from "styled-components";
import theme from "./themes/theme";

function App() {
  const [isLogin, setIsLogin] = useState(false);

  const handleLogin = () => {
    return setIsLogin(!isLogin);
  };

  // console.log(isLogin);

  useEffect(() => {
    const userToken = sessionStorage.getItem("userToken");
    if (userToken) {
      setIsLogin(true);
    }
  }, []);

  //로그아웃
  const loginout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        console.log("로그아웃");
        sessionStorage.removeItem("userToken");
        alert("로그아웃되었습니다");
        handleLogin();
      })
      .catch((error) => {
        // An error happened.
        console.error("로그아웃실패", error);
      });
  };

  return (
    <BrowserRouter>
      <div className="App">
        {/*theme css 코드 공통코드 모든 페이지 사용하기 위함 */}
        <ThemeProvider theme={theme}>
          <Header isLogin={isLogin} loginout={loginout} />
          {/* 최상단 BrowserRouter 태그로 감싸기 */}
          {/* Routes, Route 컴포넌트 사용 */}
          <Routes>
            <Route path="/cart" element={<Cart />} />
            <Route path="/detail" element={<Detail />} />
            <Route
              path="/login"
              element={<Login handleLogin={handleLogin} />}
            />
          </Routes>
        </ThemeProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;
