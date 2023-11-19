import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import Checkout from "./checkout/Checkout";
import Blog from "./blog/Blog";
// import Contact from "./pages/Contact";
// import NoPage from "./pages/NoPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Blog  />}>
          <Route index element={<Blog  />} />
          <Route path="blogs"  element={<Blog />} />
          <Route path="Products" element={<Products />} />
          <Route path="Contact" element={<Checkout />} />
          {/* <Route path="contact" element={<Contact />} /> */}
          {/* <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);