import { BrowserRouter, Routes, Route, ScrollRestoration } from 'react-router-dom';
import Home from './pages/Home';
import CartPage from './pages/CartPage';
import Header from './components/statics/Header';
import AboutUs from './pages/AboutUs';
import Footer from './components/statics/Footer';
import Login from './pages/Login';
import ProductDetail from './components/ProductDetail';
import Admin from './pages/Admin';
import NotFound from './pages/NotFound';
import ProtectedRoute from './auth/ProtectedRoute'
import CartSidebar from './components/CartSidebar';
import Error from './components/statics/Error';
function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/error" element={<Error />} />
        <Route path="/admin" element={
          <ProtectedRoute>
            <Admin />
          </ProtectedRoute>
          
          } />
        <Route path="/product/:id" element={<ProductDetail/> } />
        <Route path="/*" element={<NotFound/> } />
      </Routes>
      <CartSidebar />
      <Footer/>
    </BrowserRouter>
  );
}

export default App;