import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from '../pages/HomePage/Home';
import PageNotFound from '../pages/PageNotFound/PageNotFound';

import Header from '../layout/Header';
import Footer from '../layout/Footer';

const HomeRouter = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route exact path="*" element={<PageNotFound />} />
            </Routes>
            <Footer />
        </Router>
    );
};

export default HomeRouter;
