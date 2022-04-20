import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import Product from "./pages/Product/Product";
import Cart from "./pages/Cart/Cart";
import Account from "./pages/Account/Account";
import About from "./pages/About/About";
import Header from "components/Header/Header";
import CartState from "context/CartState";
function App() {
  return (
    <CartState>
      <div className="container">
        <div className="card">
          <BrowserRouter>
            <div className="left-menu">
              <div className="logo-wrapper">
                <h1>
                  CART<span>App</span>
                </h1>
              </div>
              <Navigation />
            </div>
            <div className="content">
              <Header />

              <Routes>
                <Route path="/" element={<Product />} />
                <Route path="/Cart" element={<Cart />} />
                <Route path="/Account" element={<Account />} />
                <Route path="/About" element={<About />} />
              </Routes>
            </div>
          </BrowserRouter>
        </div>
      </div>
    </CartState>
  );
}

export default App;
