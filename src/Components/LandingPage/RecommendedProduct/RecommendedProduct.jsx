import RecommendedCard from './RecommendedCard';

const RecommendedProduct = () => {
    return (
        <>
            <div
                className={
                    'landing-recommended-section landing-recommended-section-light'
                }
            >
                <RecommendedCard
                    productSubTitle={'Recommended for you'}
                    productTitle={'Thin rims'}
                    productDescription={
                        'Light weight, full-frame , transparent Full Rim Square Eyeglasses.'
                    }
                />
            </div>
        </>
    );
};

export default RecommendedProduct;
