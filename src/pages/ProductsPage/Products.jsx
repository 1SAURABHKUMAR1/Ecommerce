import { useEffect, useState } from 'react';
import LoaderMain from '../../Components/UI/Loader/LoaderMain/LoaderMain';

import MainProductSection from '../../Components/ProductsPage/MainProductSection/MainProductSection';
import FilteredSection from '../../Components/ProductsPage/FilterSection/FilteredSection';

import useScrollToTop from '../../Hooks/useScrollToTop';

const Category = () => {
    useScrollToTop();

    const [loading, setLoading] = useState(false);

    const loadingHandler = () => {
        setLoading(true);

        setTimeout(() => {
            setLoading(false);
        }, 1700);
    };

    useEffect(() => {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        loadingHandler();
    }, []);

    return (
        <>
            {loading ? (
                <>
                    <LoaderMain />
                </>
            ) : (
                <div className="m-0 flex w-full flex-1 flex-col bg-gray-50">
                    <div className="w-full px-7">
                        <div className="border-b-2 border-gray-300 py-6 px-8 text-center">
                            <h1 className="text-4xl font-bold tracking-tight text-gray-700  md:mb-4 md:text-4xl">
                                New Arrivals
                            </h1>
                        </div>
                        <div className="my-8 mt-4 mb-20 flex flex-col md:flex-row">
                            <FilteredSection />
                            <MainProductSection />
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Category;
