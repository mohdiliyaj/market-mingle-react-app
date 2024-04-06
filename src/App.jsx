import Header from "./components/Header";
import {Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
import Cart from "./pages/Cart"

const App = () => {
  return (
    <div>
      <div>
        <Header />
      </div>

      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/cart" element={<Cart/>} />
      </Routes>

    </div>
  );
};

export default App;
