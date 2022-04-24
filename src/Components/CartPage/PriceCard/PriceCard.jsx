import FormButton from '../../UI/Button/FormButton';

const PriceCard = ({ headerTitle, buttonText }) => {
    return (
        <>
            <div className="mdmid:h-max mdmid:max-w-[22rem] sticky top-20 w-full space-y-3 rounded border-2 bg-white p-4 shadow-sm">
                <h1 className="text-center text-lg font-medium ">
                    {headerTitle}
                </h1>
                <hr className="border-b-1 border-dashed border-gray-400" />
                <div className="space-y-2">
                    <div className="flex justify-between">
                        <h3 className="text-gray-800">Price</h3>
                        <h3 className="text-gray-800">₹ 1222</h3>
                    </div>
                    <div className="flex justify-between">
                        <h3 className="text-gray-800">Delivery Charges</h3>
                        <h3 className="text-green-600">FREE</h3>
                    </div>
                    <div className="flex justify-between">
                        <h3 className="text-gray-800">Discount</h3>
                        <h3 className="text-green-600">- ₹ 122</h3>
                    </div>
                    <div className="flex justify-between">
                        <h3 className="text-gray-800">Total Quantity</h3>
                        <h3 className="text-gray-800">3</h3>
                    </div>
                </div>
                <hr className="border-b-1 border-dashed border-gray-400" />
                <div className="flex justify-between">
                    <h3 className="font-medium">Total</h3>
                    <h3 className="font-medium">₹ 1122</h3>
                </div>
                <hr className="border-b-1 !mb-4 border-dashed  border-gray-400" />
                <FormButton buttonText={buttonText} />
                <hr className="border-b-1 !mt-4 border-dashed  border-gray-400" />
                <div className="text-center font-medium text-green-600">
                    You will save ₹{4880} on this order
                </div>
            </div>
        </>
    );
};

export default PriceCard;
