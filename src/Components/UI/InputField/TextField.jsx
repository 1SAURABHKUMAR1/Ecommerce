const TextField = ({
    htmlFor,
    labelTitle,
    type,
    placeHolder,
    value,
    onChange,
    id,
    name,
}) => {
    return (
        <>
            <div className="w-full">
                <label
                    htmlFor={htmlFor}
                    className="mb-1 block font-semibold tracking-wide text-gray-600"
                >
                    {labelTitle}
                </label>
                <input
                    type={type}
                    placeholder={placeHolder}
                    id={id}
                    value={value}
                    onChange={onChange}
                    name={name}
                    required
                    aria-required
                    className="w-full rounded-md border-[1.5px] border-gray-300 p-2 px-4 outline-none focus:border-indigo-400 focus:outline-none"
                />
            </div>
        </>
    );
};

export default TextField;
