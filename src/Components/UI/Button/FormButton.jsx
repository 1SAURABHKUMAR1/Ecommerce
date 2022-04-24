const FormButton = ({ buttonText }) => {
    return (
        <>
            <button className="text-md  block w-full rounded bg-indigo-600 px-4 py-3 font-semibold  tracking-wider text-white transition duration-300 ease-in-out hover:bg-indigo-500 focus:bg-indigo-500 focus:outline-none">
                {buttonText}
            </button>
        </>
    );
};

export default FormButton;
