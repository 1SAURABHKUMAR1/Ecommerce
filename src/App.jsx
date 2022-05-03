import './App.css';

import { Routes, Route } from 'react-router-dom';

import Header from './Components/Layout/Header/Header';
import Footer from './Components/Layout/Footer/Footer';

import Landing from './pages/LandingPage/Landing';
import PageNotFound from './pages/PageNotFound/PageNotFound';
import Signup from './pages/SignupPage/Signup';
import Login from './pages/LoginPage/Login';
import ForgotPassword from './pages/ForgotPasswordPage/ForgotPassword';
import Products from './pages/ProductsPage/Products';
import SingleProduct from './pages/SingleProductPage/SingleProduct';
import Cart from './pages/CartPage/Cart';
import Checkout from './pages/CheckoutPage/Checkout';
import Account from './pages/AccountPage/Account';
import Profile from './pages/ProfilePage/Profile';
import Order from './pages/OrderPage/Order';
import Support from './pages/SupportPage/Support';

const App = () => {
    return (
        <div className="font-popins m-auto h-full w-full min-w-0">
            <div className="m-0 flex min-h-screen min-w-0 flex-col justify-between">
                <Header />
                <Routes>
                    <Route path="/" element={<Landing />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/login" element={<Login />} />
                    <Route
                        path="/forgotpassword"
                        element={<ForgotPassword />}
                    />
                    <Route path="/products" element={<Products />} />
                    <Route
                        path="/products/:productId"
                        element={<SingleProduct />}
                    />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/checkout" element={<Checkout />} />
                    <Route path="/account" element={<Account />}>
                        <Route path="profile" element={<Profile />} />
                        <Route path="orders" element={<Order />} />
                        <Route path="support" element={<Support />} />
                    </Route>
                    <Route exact path="*" element={<PageNotFound />} />
                </Routes>
                <Footer />
            </div>
        </div>
    );
};

export default App;
