import TextField from '../../UI/InputField/TextField';
import CheckoutWrapper from '../Wrapper/CheckoutWrapper';

import { useCheckoutProvider } from '../../../Context/Checkout/CheckoutProvider';
import { useState, useEffect } from 'react';

const AddressForm = () => {
    const {
        checkoutState: { shippingInfo },
        checkoutDispatch,
    } = useCheckoutProvider();
    const [isValid, setIsValid] = useState(false);

    const updateAddress = (field, payload) => {
        checkoutDispatch({
            type: 'SET_ADDRESS',
            field: field,
            payload: payload === '' ? null : payload,
        });
    };

    useEffect(() => {
        if (
            shippingInfo.name &&
            shippingInfo.phoneNumber &&
            shippingInfo.postalCode &&
            shippingInfo.city &&
            shippingInfo.address &&
            shippingInfo.state &&
            shippingInfo.country
        ) {
            setIsValid(true);
        } else {
            setIsValid(false);
        }
    }, [shippingInfo]);

    useEffect(() => {
        checkoutDispatch({
            type: 'DEFAULT_STATE',
        });
    }, []);

    return (
        <>
            <CheckoutWrapper
                headerTitle={'Contact & Delivery Address'}
                iconBlue={isValid}
            >
                <div className="flex flex-col gap-4 px-4 sm:pt-4">
                    <div className="flex flex-col gap-4 sm:flex-row sm:gap-5">
                        <TextField
                            htmlFor={'name'}
                            labelTitle={'Name'}
                            type={'text'}
                            placeHolder={'Enter your name'}
                            id={'name'}
                            value={shippingInfo.name ? shippingInfo.name : ''}
                            onChange={(event) =>
                                updateAddress('name', event.target.value)
                            }
                        />
                        <TextField
                            htmlFor={'mobile'}
                            labelTitle={'Phone No.'}
                            type={'text'}
                            placeHolder={'Enter your phone number'}
                            id={'mobile'}
                            value={
                                shippingInfo.phoneNumber
                                    ? shippingInfo.phoneNumber
                                    : ''
                            }
                            onChange={(event) =>
                                updateAddress('phoneNumber', event.target.value)
                            }
                        />
                    </div>
                    <div className="flex flex-col gap-4 sm:flex-row sm:gap-5">
                        <TextField
                            htmlFor={'pincode'}
                            labelTitle={'Pincode'}
                            type={'text'}
                            placeHolder={'Enter your area pincode'}
                            id={'pincode'}
                            value={
                                shippingInfo.postalCode
                                    ? shippingInfo.postalCode
                                    : ''
                            }
                            onChange={(event) =>
                                updateAddress('postalCode', event.target.value)
                            }
                        />

                        <TextField
                            htmlFor={'city'}
                            labelTitle={'City'}
                            type={'text'}
                            placeHolder={'Enter your city'}
                            id={'city'}
                            value={shippingInfo.city ? shippingInfo.city : ''}
                            onChange={(event) =>
                                updateAddress('city', event.target.value)
                            }
                        />
                    </div>
                    <TextField
                        htmlFor={'address'}
                        labelTitle={'Address'}
                        type={'text'}
                        placeHolder={'Enter your address'}
                        id={'address'}
                        value={shippingInfo.address ? shippingInfo.address : ''}
                        onChange={(event) =>
                            updateAddress('address', event.target.value)
                        }
                    />
                    <div className="flex flex-col gap-4 sm:flex-row sm:gap-5">
                        <TextField
                            htmlFor={'state'}
                            labelTitle={'State'}
                            type={'text'}
                            placeHolder={'Enter your state'}
                            id={'state'}
                            value={shippingInfo.state ? shippingInfo.state : ''}
                            onChange={(event) =>
                                updateAddress('state', event.target.value)
                            }
                        />
                        <TextField
                            htmlFor={'country'}
                            labelTitle={'Country'}
                            type={'text'}
                            placeHolder={'Enter your Country'}
                            id={'country'}
                            value={
                                shippingInfo.country ? shippingInfo.country : ''
                            }
                            onChange={(event) =>
                                updateAddress('country', event.target.value)
                            }
                        />
                    </div>
                </div>
            </CheckoutWrapper>
        </>
    );
};

export default AddressForm;
