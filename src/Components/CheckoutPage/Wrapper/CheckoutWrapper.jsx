import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const CheckoutWrapper = ({ headerTitle, iconBlue = false, children }) => {
    const [show, setShow] = useState(false);

    const toogleShow = () => {
        setShow(!show);
    };

    return (
        <>
            <div className="mb-4 flex w-full flex-col rounded border-2 bg-white px-2 py-4 shadow-sm hover:bg-gray-200">
                <div
                    className="flex cursor-pointer items-center justify-between"
                    onClick={toogleShow}
                >
                    <h1 className="p-4 py-2 pr-0 text-lg font-semibold">
                        {headerTitle}
                    </h1>
                    <FontAwesomeIcon
                        icon={faCircleCheck}
                        className={`h-6 w-6 pr-3 ${
                            iconBlue ? 'text-indigo-600' : 'text-gray-500'
                        }`}
                    />
                </div>
                {show && (
                    <>
                        <div className="rounded bg-white py-4">{children}</div>
                    </>
                )}
            </div>
        </>
    );
};

export default CheckoutWrapper;
