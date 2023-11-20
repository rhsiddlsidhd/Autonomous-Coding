import "./App.css";
import Header from "./components/common/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./pages/Cart";
import Detail from "./pages/Detail";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        {/* 최상단 BrowserRouter 태그로 감싸기 */}
        {/* Routes, Route 컴포넌트 사용 */}
        <Routes>
          <Route path="/cart" element={<Cart />} />
          <Route path="/detail" element={<Detail />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
