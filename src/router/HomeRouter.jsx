import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from '../pages/HomePage/Home';
import PageNotFound from '../pages/PageNotFound/PageNotFound';
import Signup from '../pages/SignupPage/Signup';

import Header from '../layout/Header';
import Footer from '../layout/Footer';
import Login from '../pages/LoginPage/Login';
import Category from '../pages/CategoryPage/Category';

const HomeRouter = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />
                <Route path="/category" element={<Category />} />
                <Route exact path="*" element={<PageNotFound />} />
            </Routes>
            <Footer />
        </Router>
    );
};

export default HomeRouter;
