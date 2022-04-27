import TextField from '../../UI/InputField/TextField';
import CheckoutWrapper from '../Wrapper/CheckoutWrapper';

const AddressForm = () => {
    return (
        <>
            <CheckoutWrapper headerTitle={'Contact & Delivery Address'}>
                <div className="flex flex-col gap-4 px-4 sm:pt-4">
                    <div className="flex flex-col gap-4 sm:flex-row sm:gap-5">
                        <TextField
                            htmlFor={'name'}
                            labelTitle={'Name'}
                            type={'text'}
                            placeHolder={'Enter your name'}
                            id={'name'}
                        />
                        <TextField
                            htmlFor={'mobile'}
                            labelTitle={'Phone No.'}
                            type={'text'}
                            placeHolder={'Enter your phone number'}
                            id={'mobile'}
                        />
                    </div>
                    <div className="flex flex-col gap-4 sm:flex-row sm:gap-5">
                        <TextField
                            htmlFor={'pincode'}
                            labelTitle={'Pincode'}
                            type={'text'}
                            placeHolder={'Enter your area pincode'}
                            id={'pincode'}
                        />

                        <TextField
                            htmlFor={'landmark'}
                            labelTitle={'Landmark'}
                            type={'text'}
                            placeHolder={'Enter landmark'}
                            id={'landmark'}
                        />
                    </div>
                    <TextField
                        htmlFor={'address'}
                        labelTitle={'Address'}
                        type={'text'}
                        placeHolder={'Enter your address'}
                        id={'address'}
                    />
                    <div className="flex flex-col gap-4 sm:flex-row sm:gap-5">
                        <TextField
                            htmlFor={'city'}
                            labelTitle={'City'}
                            type={'text'}
                            placeHolder={'Enter your city'}
                            id={'city'}
                        />
                        <TextField
                            htmlFor={'state'}
                            labelTitle={'State'}
                            type={'text'}
                            placeHolder={'Enter your state'}
                            id={'state'}
                        />
                    </div>
                </div>
            </CheckoutWrapper>
        </>
    );
};

export default AddressForm;
