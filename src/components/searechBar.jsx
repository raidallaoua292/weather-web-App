import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function SearchBar({handleChangeSearch, handelSearchClick, searchInput}) {

    return (
        <>
        {/* loaoding  search bar */}
        <div className="w-full flex flex-col items-center justify-around mb-3  px-3 py-1 md:flex-row" >
            <input
                value={searchInput}
                onChange={handleChangeSearch}
                onKeyPress={(e) => {
                    if (e.key === "Enter") {
                        handelSearchClick();
                    }
                }} 
                type="text"
                placeholder="Search for a location"
                className="w-full p-2 border-2 border-gray-300 rounded-md focus:outline-none focus:border-primary-500"
            />
            <button
                onClick={handelSearchClick}
                className="w-full md:w-1/4 p-2 bg-primary-500 bg-blue-400 text-white rounded-md mt-3 md:mt-0 md:ml-2"
            >
                <FontAwesomeIcon icon={faSearch} size="1x" />
            </button>
            </div>
        
            {/* <div className="w-full flex flex-col items-center justify-around mb-3  px-3 py-1 md:flex-row" >
            <input
                value={searchInput}
                onChange={handleChangeSearch}
                onKeyPress={(e) => {
                    if (e.key === "Enter") {
                        handelSearchClick();
                    }
                }}
                type="text"
                placeholder="Search for a location"
                className="w-full p-2 border-2 border-gray-300 rounded-md focus:outline-none focus:border-primary-500"
            />
            <button
                onClick={handelSearchClick}
                className="w-full md:w-1/4 p-2 bg-primary-500 bg-blue-400 text-white rounded-md mt-3 md:mt-0 md:ml-2"
            >
                <FontAwesomeIcon icon={faSearch} size="1x" />
            </button>
            </div> */}
        </>
        
    )
}