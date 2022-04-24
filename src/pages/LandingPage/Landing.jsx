import HeaderSection from '../../Components/LandingPage/HeaderSection/HeaderSection';
import RecommendedProduct from '../../Components/LandingPage/RecommendedProduct/RecommendedProduct';
import BestProduct from '../../Components/LandingPage/BestProduct/BestProducts';

import useScrollToTop from '../../Hooks/useScrollToTop';

const Landing = () => {
    useScrollToTop();

    return (
        <>
            <div className="flex flex-1 flex-col bg-gray-50 transition-all duration-100 ease-in-out">
                <div className="w-full px-8 pb-10">
                    <HeaderSection />
                    <BestProduct />
                    <RecommendedProduct />
                </div>
            </div>
        </>
    );
};

export default Landing;
