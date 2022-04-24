import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

const FilterWrapper = ({ headerTitle, children }) => {
    const [showFilters, setShowFilters] = useState(true);

    const toggleFilter = () => {
        setShowFilters(!showFilters);
    };

    return (
        <>
            <div className="mb-1 flex w-full flex-col border-b-2 px-2 py-1 ">
                <div
                    onClick={toggleFilter}
                    className="flex cursor-pointer items-center gap-x-2"
                >
                    <h1 className="text-lg font-semibold">{headerTitle}</h1>
                    {showFilters ? (
                        <FontAwesomeIcon icon={faArrowDown} />
                    ) : (
                        <FontAwesomeIcon icon={faArrowUp} />
                    )}
                </div>
                {showFilters && (
                    <>
                        <div className="rounded pt-2">{children}</div>
                    </>
                )}
            </div>
        </>
    );
};

export default FilterWrapper;
