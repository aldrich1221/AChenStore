import logo from './logo.svg';
import './App.css';
import {Route,Routes} from 'react-router'
import {BrowserRouter} from 'react-router-dom'
import Blog from './blog/Blog'
import Checkout from './checkout/Checkout';
import Products from './pages/Products/Products';
import Home from './pages/Home/Home';
import Layout from "./pages/Layout";
function App() {
  return (
    <BrowserRouter>
     
    <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="Blogs" element={<Blog />} />
      <Route path="Products" element={<Products />} />
      {/* <Route path="contact" element={<Contact />} /> */}
      {/* <Route path="*" element={<NoPage />} /> */}
    </Route>
  </Routes>
</BrowserRouter>
  );
}

export default App;
