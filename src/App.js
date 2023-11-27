import "./App.css";
import Header from "./components/common/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./pages/Cart";
import Detail from "./pages/Detail";
import Login from "./pages/Login";
import { useState } from "react";

function App() {
  const [isLogin, setIsLogin] = useState(false);

  const handleLogin = () => {
    return setIsLogin(!isLogin);
  };

  console.log(isLogin);

  return (
    <BrowserRouter>
      <div className="App">
        <Header isLogin={isLogin} handleLogin={handleLogin} />
        {/* 최상단 BrowserRouter 태그로 감싸기 */}
        {/* Routes, Route 컴포넌트 사용 */}
        <Routes>
          <Route path="/cart" element={<Cart />} />
          <Route path="/detail" element={<Detail />} />
          <Route path="/login" element={<Login handleLogin={handleLogin} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
