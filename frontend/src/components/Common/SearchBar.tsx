import { useState, type FormEvent } from "react"
import { HiMagnifyingGlass, HiMiniXMark } from "react-icons/hi2"

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const handleSearchToggle = (): void => {
        setIsOpen(!isOpen);
        setSearchTerm("");
    }

    const handleSearch = (e: FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        console.log("search Term", searchTerm);
        setIsOpen(false);
    }

    return (
        <>
            <button type="button" onClick={handleSearchToggle} className="text-gray-600 hover:text-black">
                <HiMagnifyingGlass className="h-6 w-6" />
            </button>

            <div 
                className={`absolute top-0 left-0 w-full bg-white z-50 flex items-center justify-center px-6 shadow-md transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen ? "h-16 opacity-100 pointer-events-auto" : "h-0 opacity-0 pointer-events-none"
                }`}
            >
                <div className="flex items-center w-full max-w-2xl border border-gray-400 rounded-full px-4 py-2 bg-gray-100">
                    <form onSubmit={handleSearch} className="flex items-center w-full">
                    <input
                        type="text"
                        placeholder="Search"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="flex-1 text-gray-700 focus:outline-none text-sm bg-transparent"
                        autoFocus={isOpen}
                    />
                    <button type="submit">
                        <HiMagnifyingGlass className="h-5 w-5 text-gray-500" />
                    </button>
                    </form>
                </div>
                <button type="button" onClick={handleSearchToggle} className="ml-4 text-gray-600 hover:text-black">
                    <HiMiniXMark className="h-6 w-6" />
                </button>
            </div>
        </>
    );
};

export default SearchBar;
