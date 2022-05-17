import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import About from "./pages/About";
import Header from "components/Header";
import MainLayout from "layout";

function App() {
  return (
    <MainLayout>
      <Router>
        <div className="content">
          <Header />
          <Routes>
            <Route path="/" element={<Product />} />
            <Route path="/Cart" element={<Cart />} />
            <Route path="/About" element={<About />} />
          </Routes>
        </div>
      </Router>
    </MainLayout>
  );
}

export default App;
